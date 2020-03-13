import React from "react";
import { toast } from "react-toastify";
import ToastError from "../components/toasts/ErrorToast";
import chalk from "chalk";
import { LANG } from "../hooks/hook";

// 한국어인지 검사한다 한국어검사
export const isIncludeKr = (str: string | null): boolean => {
  if (!str) return false;
  const check = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
  if (check.test(str)) return true;
  return false;
};

type Err = {
  msg: string | null;
  code: String | null;
};

interface result {
  error: string | null | Err;
  ok: boolean | null;
  [data: string]: any;
}

const onCompletedMessage = (
  result: result,
  resultOK?: string,
  resultFale?: string | undefined,
  queryName?: string
) => {
  if (!result) {
    return;
  }
  let haveKr = false;
  if (typeof result.error === "string") {
    haveKr = isIncludeKr(result.error);
  }
  if (result.ok && resultOK) {
    toast.success(resultOK, {
      className: `${queryName}-ok`
    });
    // 한글이 있다면 에러 메세지는 백엔드에서 온것
  } else if (haveKr) {
    toast.warn(result.error, {
      toastId: `${queryName}-error`
    });
    // 한글이 없다면 에러 메세지는 새로운 타입 Err 에 의한것
  } else if (
    result.error &&
    typeof result.error !== "string" &&
    result.error.msg
  ) {
    console.info(chalk.bgRed("On Completed Error Msg From BackEnd"));
    console.error(result.error.msg);
    console.error(result.error.code);
    const msg = LANG("ErrMsg", (result.error.code || "") as string);
    if (msg) {
      toast.warn(msg);
    } else {
      toast.warn(<ToastError />, {
        toastId: `${queryName}-error`
      });
    }
  } else if (result.error) {
    console.error(`Error From BackEnd Message  : ${result.error}`);
    resultFale &&
      toast.warn(<ToastError />, {
        toastId: `${queryName}-error`
      });
    resultFale ||
      toast.warn(<ToastError />, {
        toastId: `${queryName}-error`
      });
  }
};

export default onCompletedMessage;
