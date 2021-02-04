import {TABLE_RESIZE} from "@/redux/type";

export function tableResize(data) {
  return {
    type: TABLE_RESIZE,
    data
  }
}