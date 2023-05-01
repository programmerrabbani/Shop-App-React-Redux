import axios from "axios";
import {
  BRAND_STATUS_SUCCESS,
  BRAND_UPDATE_SUCCESS,
  CATEGORY_STATUS_SUCCESS,
  CATEGORY_UPDATE_SUCCESS,
  CREATE_BRAND_FAILED,
  CREATE_BRAND_SUCCESS,
  CREATE_CATEGORY_FAILED,
  CREATE_CATEGORY_SUCCESS,
  CREATE_TAG_FAILED,
  CREATE_TAG_SUCCESS,
  DELETE_BRAND_FAILED,
  DELETE_BRAND_SUCCESS,
  DELETE_CATEGORY_FAILED,
  DELETE_CATEGORY_SUCCESS,
  DELETE_TAG_FAILED,
  DELETE_TAG_SUCCESS,
  GET_BRAND_FAILED,
  GET_BRAND_REQUEST,
  GET_BRAND_SUCCESS,
  GET_CATEGORY_FAILED,
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_SUCCESS,
  GET_PRODUCT_FULFILL,
  GET_PRODUCT_PENDING,
  GET_PRODUCT_REJECTED,
  GET_TAG_FAILED,
  GET_TAG_REQUEST,
  GET_TAG_SUCCESS,
  TAG_STATUS_SUCCESS,
  TAG_UPDATE_SUCCESS,
} from "./ActionType.js";

// Brands Actions

// get all Brand

export const getAllBrand = () => async (dispatch) => {
  try {
    dispatch({ type: GET_BRAND_REQUEST });
    await axios
      .get("http://localhost:5050/api/v1/product/brand")
      .then((res) => {
        dispatch({ type: GET_BRAND_SUCCESS, payload: res.data.brands });
      })
      .catch((error) => {
        dispatch({ type: GET_BRAND_FAILED, payload: error.response.message });
      });
  } catch (error) {
    dispatch({ type: GET_BRAND_FAILED, payload: error.response.message });
  }
};

// create Brand

export const createBrand =
  ({ data, setModal, setInput, setLogo }) =>
  async (dispatch) => {
    try {
      await axios
        .post("http://localhost:5050/api/v1/product/brand", data)
        .then((res) => {
          dispatch({ type: CREATE_BRAND_SUCCESS, payload: res.data.brand });
          setModal(false);
          setInput("");
          setLogo("");
        })
        .catch((error) => {
          dispatch({
            type: CREATE_BRAND_FAILED,
            payload: error.response.message,
          });
        });
    } catch (error) {
      dispatch({ type: CREATE_BRAND_FAILED, payload: error.response.message });
    }
  };

// Delete Brand

export const deleteBrand = (id) => async (dispatch) => {
  try {
    await axios
      .delete(`http://localhost:5050/api/v1/product/brand/${id}`)
      .then((res) => {
        dispatch({ type: DELETE_BRAND_SUCCESS, payload: id });
      })
      .catch((error) => {
        dispatch({
          type: DELETE_BRAND_FAILED,
          payload: error.response.message,
        });
      });
  } catch (error) {
    dispatch({ type: DELETE_BRAND_FAILED, payload: error.response.message });
  }
};

// Brand Status Update

export const updateBrandStatus =
  ({ id, status }) =>
  async (dispatch) => {
    try {
      await axios
        .patch(`http://localhost:5050/api/v1/product/brand-status/${id}`, {
          status,
        })
        .then((res) => {
          dispatch({
            type: BRAND_STATUS_SUCCESS,
            payload: res.data.brand,
          });
        });
    } catch (error) {
      dispatch({ type: DELETE_BRAND_FAILED, payload: error.response.message });
    }
  };

// edit Brand
export const updateBrand =
  ({ id, data, setModal }) =>
  async (dispatch) => {
    try {
      await axios
        .put(`http://localhost:5050/api/v1/product/brand/${id}`, data)
        .then((res) => {
          dispatch({
            type: BRAND_UPDATE_SUCCESS,
            payload: res.data.brand,
          });
          setModal((prevState) => ({ ...prevState, show: false }));
        });
    } catch (error) {
      dispatch({ type: DELETE_BRAND_FAILED, payload: error.response.message });
    }
  };
// categories

// get all category

export const getAllCategory = () => async (dispatch) => {
  try {
    dispatch({ type: GET_CATEGORY_REQUEST });
    await axios
      .get("http://localhost:5050/api/v1/product/category")
      .then((res) => {
        dispatch({ type: GET_CATEGORY_SUCCESS, payload: res.data.categories });
      })
      .catch((error) => {
        dispatch({
          type: GET_CATEGORY_FAILED,
          payload: error.response.message,
        });
      });
  } catch (error) {
    dispatch({ type: GET_CATEGORY_FAILED, payload: error.response.message });
  }
};

// create category

export const createCategory =
  ({ data, setModal, setInput, setLogo }) =>
  async (dispatch) => {
    try {
      await axios
        .post("http://localhost:5050/api/v1/product/category", data)
        .then((res) => {
          dispatch({
            type: CREATE_CATEGORY_SUCCESS,
            payload: res.data.category,
          });
          setModal(false);
          setInput("");
          setLogo("");
        })
        .catch((error) => {
          dispatch({
            type: CREATE_CATEGORY_FAILED,
            payload: error.response.message,
          });
        });
    } catch (error) {
      dispatch({
        type: CREATE_CATEGORY_FAILED,
        payload: error.response.message,
      });
    }
  };

// Category delete

export const deleteCategory = (id) => async (dispatch) => {
  try {
    await axios
      .delete(`http://localhost:5050/api/v1/product/category/${id}`)
      .then((res) => {
        dispatch({ type: DELETE_CATEGORY_SUCCESS, payload: id });
      })
      .catch((error) => {
        dispatch({
          type: DELETE_CATEGORY_FAILED,
          payload: error.response.message,
        });
      });
  } catch (error) {
    dispatch({ type: DELETE_CATEGORY_FAILED, payload: error.response.message });
  }
};

// edit Category
export const updateCategory =
  ({ id, data, setModal }) =>
  async (dispatch) => {
    try {
      await axios
        .put(`http://localhost:5050/api/v1/product/category/${id}`, data)
        .then((res) => {
          dispatch({
            type: CATEGORY_UPDATE_SUCCESS,
            payload: res.data.category,
          });
          setModal((prevState) => ({ ...prevState, show: false }));
        });
    } catch (error) {
      dispatch({ type: DELETE_BRAND_FAILED, payload: error.response.message });
    }
  };

// Category Status Update

export const updateCategoryStatus =
  ({ id, status }) =>
  async (dispatch) => {
    try {
      await axios
        .patch(`http://localhost:5050/api/v1/product/category-status/${id}`, {
          status,
        })
        .then((res) => {
          dispatch({
            type: CATEGORY_STATUS_SUCCESS,
            payload: res.data.category,
          });
        });
    } catch (error) {
      console.log(error.message);
    }
  };

// Tags

// get all Tag

export const getAllTags = () => async (dispatch) => {
  try {
    dispatch({ type: GET_TAG_REQUEST });
    await axios
      .get("http://localhost:5050/api/v1/product/tag")
      .then((res) => {
        dispatch({ type: GET_TAG_SUCCESS, payload: res.data.tags });
      })
      .catch((error) => {
        dispatch({ type: GET_TAG_FAILED, payload: error.response.message });
      });
  } catch (error) {
    dispatch({ type: GET_TAG_FAILED, payload: error.response.message });
  }
};

// create Tag

export const createTag = (data, setModal, setInput) => async (dispatch) => {
  try {
    await axios
      .post("http://localhost:5050/api/v1/product/tag", { name: data })
      .then((res) => {
        dispatch({ type: CREATE_TAG_SUCCESS, payload: res.data.tag });
        setModal(false);
        setInput("");
      })
      .catch((error) => {
        dispatch({
          type: CREATE_TAG_FAILED,
          payload: error.response.message,
        });
      });
  } catch (error) {
    dispatch({ type: CREATE_TAG_FAILED, payload: error.response.message });
  }
};

// Delete Tag

export const deleteTag = (id) => async (dispatch) => {
  try {
    await axios
      .delete(`http://localhost:5050/api/v1/product/tag/${id}`)
      .then((res) => {
        dispatch({ type: DELETE_TAG_SUCCESS, payload: id });
      })
      .catch((error) => {
        dispatch({
          type: DELETE_TAG_FAILED,
          payload: error.response.message,
        });
      });
  } catch (error) {
    dispatch({ type: DELETE_TAG_FAILED, payload: error.response.message });
  }
};

// Tag Status Update

export const updateTagStatus =
  ({ id, status }) =>
  async (dispatch) => {
    try {
      await axios
        .patch(`http://localhost:5050/api/v1/product/tag-status/${id}`, {
          status,
        })
        .then((res) => {
          dispatch({
            type: TAG_STATUS_SUCCESS,
            payload: res.data.tag,
          });
        });
    } catch (error) {
      console.log(error.message);
    }
  };

// edit tag

export const updateTag =
  ({ id, name, setModal }) =>
  async (dispatch) => {
    try {
      await axios
        .put(`http://localhost:5050/api/v1/product/tag/${id}`, {
          id,
          name,
        })
        .then((res) => {
          dispatch({
            type: TAG_UPDATE_SUCCESS,
            payload: res.data.tag,
          });
          setModal((prevState) => ({ ...prevState, show: false }));
        });
    } catch (error) {
      dispatch({ type: DELETE_BRAND_FAILED, payload: error.response.message });
    }
  };

// PRODUCTS

export const getAllProducts = () => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCT_PENDING });
    await axios
      .get("http://localhost:5050/api/v1/product")
      .then((res) => {
        dispatch({ type: GET_PRODUCT_FULFILL, payload: res.data.products });
      })
      .catch((error) => {
        dispatch({
          type: GET_PRODUCT_REJECTED,
          payload: error.response.message,
        });
      });
  } catch (error) {
    dispatch({ type: GET_PRODUCT_REJECTED, payload: error.response.message });
  }
};
