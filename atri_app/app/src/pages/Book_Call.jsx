import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { useFlex300Cb, useFlex301Cb } from "../page-cbs/Book_Call";
import "../page-css/Book_Call.css";
import "../custom/Book_Call";

export default function BookCall() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Flex300Props = useStore((state)=>state["Book_Call"]["Flex300"]);
const Flex300IoProps = useIoStore((state)=>state["Book_Call"]["Flex300"]);
const Flex300Cb = useFlex300Cb()
const Flex301Props = useStore((state)=>state["Book_Call"]["Flex301"]);
const Flex301IoProps = useIoStore((state)=>state["Book_Call"]["Flex301"]);
const Flex301Cb = useFlex301Cb()

  return (<>
  <Flex1 className="p-Book_Call Flex300 bpt" {...Flex300Props} {...Flex300Cb} {...Flex300IoProps}/>
<Flex1 className="p-Book_Call Flex301 bpt" {...Flex301Props} {...Flex301Cb} {...Flex301IoProps}/>
  </>);
}
