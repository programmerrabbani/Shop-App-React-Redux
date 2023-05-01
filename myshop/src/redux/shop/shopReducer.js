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
import { initialState } from "./initialState.js";

// create shop reducer
const shopReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // Brands
    case GET_BRAND_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_BRAND_SUCCESS:
      return {
        ...state,
        loading: false,
        brands: payload,
      };

    case GET_BRAND_FAILED:
      return {
        ...state,
        loading: false,
        brands: [],
        error: payload,
      };

    case CREATE_BRAND_SUCCESS:
      return {
        ...state,
        brands: [...state.brands, payload],
      };

    case CREATE_BRAND_FAILED:
      return {
        ...state,
        brands: [],
        error: payload,
      };

    case DELETE_BRAND_SUCCESS:
      return {
        ...state,
        brands: state.brands.filter((data) => data._id !== payload),
      };

    case DELETE_BRAND_FAILED:
      return {
        ...state,
        brands: [],
        error: payload,
      };

    case BRAND_STATUS_SUCCESS:
      state.brands[state.brands.findIndex((data) => data._id === payload._id)] =
        payload;
      return {
        ...state,
        brands: state.brands,
      };

    case BRAND_UPDATE_SUCCESS:
      state.brands[state.brands.findIndex((data) => data._id === payload._id)] =
        payload;
      return {
        ...state,
        brands: state.brands,
      };

    // Categories

    case GET_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: payload,
      };

    case GET_CATEGORY_FAILED:
      return {
        ...state,
        loading: false,
        categories: [],
        error: payload,
      };

    case CREATE_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: [...state.categories, payload],
      };

    case CREATE_CATEGORY_FAILED:
      return {
        ...state,
        categories: [],
        error: payload,
      };

    case DELETE_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: state.categories.filter((data) => data._id !== payload),
      };

    case DELETE_CATEGORY_FAILED:
      return {
        ...state,
        categories: [],
        error: payload,
      };

    case CATEGORY_STATUS_SUCCESS:
      state.categories[
        state.categories.findIndex((data) => data._id === payload._id)
      ] = payload;
      return {
        ...state,
        categories: state.categories,
      };

    case CATEGORY_UPDATE_SUCCESS:
      state.categories[
        state.categories.findIndex((data) => data._id === payload._id)
      ] = payload;
      return {
        ...state,
        categories: state.categories,
      };

    // Tags
    case GET_TAG_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_TAG_SUCCESS:
      return {
        ...state,
        loading: false,
        tags: payload,
      };

    case GET_TAG_FAILED:
      return {
        ...state,
        loading: false,
        tags: [],
        error: payload,
      };

    case CREATE_TAG_SUCCESS:
      return {
        ...state,
        tags: [...state.tags, payload],
      };

    case CREATE_TAG_FAILED:
      return {
        ...state,
        tags: [],
        error: payload,
      };

    case DELETE_TAG_SUCCESS:
      return {
        ...state,
        tags: state.tags.filter((data) => data._id !== payload),
      };

    case DELETE_TAG_FAILED:
      return {
        ...state,
        tags: [],
        error: payload,
      };

    case TAG_STATUS_SUCCESS:
      state.tags[state.tags.findIndex((data) => data._id === payload._id)] =
        payload;
      return {
        ...state,
        tags: state.tags,
      };

    case TAG_UPDATE_SUCCESS:
      state.tags[state.tags.findIndex((data) => data._id === payload._id)] =
        payload;
      return {
        ...state,
        tags: state.tags,
      };

    // PRODUCTS
    case GET_PRODUCT_PENDING:
      return {
        ...state,
        loading: true,
        message: "Product Loading",
      };

    case GET_PRODUCT_FULFILL:
      return {
        ...state,
        loading: false,
        message: "Product Loaded",
        products: payload,
      };

    case GET_PRODUCT_REJECTED:
      return {
        ...state,
        loading: false,
        products: [],
        error: payload,
      };

    default:
      return state;
  }
};

// export

export default shopReducer;
