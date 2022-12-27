import { useCallback } from "react";
import { callbackFactory } from "../utils/callbackFactory";
export function useFlex300Cb() {
	const onClick = useCallback(callbackFactory("Flex300", "Book_Call", "/Book_Call", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex301Cb() {
	const onClick = useCallback(callbackFactory("Flex301", "Book_Call", "/Book_Call", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}