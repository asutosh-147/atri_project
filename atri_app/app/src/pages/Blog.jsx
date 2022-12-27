import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Accordion } from "@atrilabs/react-component-manifests/src/manifests/Accordion/Accordion.tsx";
import { useFlex1Cb, useDiv2Cb, useDiv3Cb, useImageCb, useFlex3Cb, useFlex10Cb, useDiv5Cb, useDiv7Cb, useFlex11Cb, useDiv8Cb, useFlex12Cb, useDiv10Cb, useFlex13Cb, useDiv13Cb, useFlex17Cb, useDiv6Cb, useDiv17Cb, useFlex24Cb, useDiv21Cb, useFlex28Cb, useDiv22Cb, useFlex29Cb, useDiv23Cb, useDiv24Cb, useFlex30Cb, useDiv25Cb, useDiv29Cb, useDiv30Cb, useFlex31Cb, useFlex33Cb, useDiv31Cb, useDiv32Cb, useDiv35Cb, useFlex34Cb, useDiv36Cb, useDiv37Cb, useFlex35Cb, useDiv40Cb, useDiv41Cb, useDiv42Cb, useTextBox3Cb, useTextBox4Cb, useTextBox5Cb, useImage1Cb, useImage2Cb, useImage3Cb, useImage4Cb, useTextBox8Cb, useTextBox9Cb, useTextBox10Cb, useTextBox7Cb, useTextBox11Cb, useTextBox12Cb, useTextBox13Cb, useTextBox18Cb, useTextBox19Cb, useTextBox20Cb, useTextBox21Cb, useTextBox33Cb, useTextBox34Cb, useTextBox35Cb, useTextBox48Cb, useTextBox49Cb, useTextBox50Cb, useTextBox51Cb, useTextBox52Cb, useTextBox53Cb, useTextBox54Cb, useTextBox55Cb, useImage6Cb, useTextBox57Cb, useTextBox58Cb, useTextBox59Cb, useTextBox61Cb, useTextBox62Cb, useAccordion1Cb, useAccordion2Cb, useAccordion3Cb, useAccordion4Cb, useAccordion5Cb, useAccordion6Cb, useAccordion7Cb, useAccordion8Cb, useTextBox65Cb, useTextBox66Cb, useTextBox67Cb, useTextBox68Cb, useTextBox69Cb, useTextBox73Cb, useTextBox74Cb, useTextBox75Cb, useTextBox70Cb, useTextBox71Cb, useTextBox72Cb, useTextBox76Cb, useTextBox77Cb, useTextBox78Cb } from "../page-cbs/Blog";
import "../page-css/Blog.css";
import "../custom/Blog";

export default function Blog() {
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

  const Flex1Props = useStore((state)=>state["Blog"]["Flex1"]);
const Flex1IoProps = useIoStore((state)=>state["Blog"]["Flex1"]);
const Flex1Cb = useFlex1Cb()
const Div2Props = useStore((state)=>state["Blog"]["Div2"]);
const Div2IoProps = useIoStore((state)=>state["Blog"]["Div2"]);
const Div2Cb = useDiv2Cb()
const Div3Props = useStore((state)=>state["Blog"]["Div3"]);
const Div3IoProps = useIoStore((state)=>state["Blog"]["Div3"]);
const Div3Cb = useDiv3Cb()
const ImageProps = useStore((state)=>state["Blog"]["Image"]);
const ImageIoProps = useIoStore((state)=>state["Blog"]["Image"]);
const ImageCb = useImageCb()
const Flex3Props = useStore((state)=>state["Blog"]["Flex3"]);
const Flex3IoProps = useIoStore((state)=>state["Blog"]["Flex3"]);
const Flex3Cb = useFlex3Cb()
const Flex10Props = useStore((state)=>state["Blog"]["Flex10"]);
const Flex10IoProps = useIoStore((state)=>state["Blog"]["Flex10"]);
const Flex10Cb = useFlex10Cb()
const Div5Props = useStore((state)=>state["Blog"]["Div5"]);
const Div5IoProps = useIoStore((state)=>state["Blog"]["Div5"]);
const Div5Cb = useDiv5Cb()
const Div7Props = useStore((state)=>state["Blog"]["Div7"]);
const Div7IoProps = useIoStore((state)=>state["Blog"]["Div7"]);
const Div7Cb = useDiv7Cb()
const Flex11Props = useStore((state)=>state["Blog"]["Flex11"]);
const Flex11IoProps = useIoStore((state)=>state["Blog"]["Flex11"]);
const Flex11Cb = useFlex11Cb()
const Div8Props = useStore((state)=>state["Blog"]["Div8"]);
const Div8IoProps = useIoStore((state)=>state["Blog"]["Div8"]);
const Div8Cb = useDiv8Cb()
const Flex12Props = useStore((state)=>state["Blog"]["Flex12"]);
const Flex12IoProps = useIoStore((state)=>state["Blog"]["Flex12"]);
const Flex12Cb = useFlex12Cb()
const Div10Props = useStore((state)=>state["Blog"]["Div10"]);
const Div10IoProps = useIoStore((state)=>state["Blog"]["Div10"]);
const Div10Cb = useDiv10Cb()
const Flex13Props = useStore((state)=>state["Blog"]["Flex13"]);
const Flex13IoProps = useIoStore((state)=>state["Blog"]["Flex13"]);
const Flex13Cb = useFlex13Cb()
const Div13Props = useStore((state)=>state["Blog"]["Div13"]);
const Div13IoProps = useIoStore((state)=>state["Blog"]["Div13"]);
const Div13Cb = useDiv13Cb()
const Flex17Props = useStore((state)=>state["Blog"]["Flex17"]);
const Flex17IoProps = useIoStore((state)=>state["Blog"]["Flex17"]);
const Flex17Cb = useFlex17Cb()
const Div6Props = useStore((state)=>state["Blog"]["Div6"]);
const Div6IoProps = useIoStore((state)=>state["Blog"]["Div6"]);
const Div6Cb = useDiv6Cb()
const Div17Props = useStore((state)=>state["Blog"]["Div17"]);
const Div17IoProps = useIoStore((state)=>state["Blog"]["Div17"]);
const Div17Cb = useDiv17Cb()
const Flex24Props = useStore((state)=>state["Blog"]["Flex24"]);
const Flex24IoProps = useIoStore((state)=>state["Blog"]["Flex24"]);
const Flex24Cb = useFlex24Cb()
const Div21Props = useStore((state)=>state["Blog"]["Div21"]);
const Div21IoProps = useIoStore((state)=>state["Blog"]["Div21"]);
const Div21Cb = useDiv21Cb()
const Flex28Props = useStore((state)=>state["Blog"]["Flex28"]);
const Flex28IoProps = useIoStore((state)=>state["Blog"]["Flex28"]);
const Flex28Cb = useFlex28Cb()
const Div22Props = useStore((state)=>state["Blog"]["Div22"]);
const Div22IoProps = useIoStore((state)=>state["Blog"]["Div22"]);
const Div22Cb = useDiv22Cb()
const Flex29Props = useStore((state)=>state["Blog"]["Flex29"]);
const Flex29IoProps = useIoStore((state)=>state["Blog"]["Flex29"]);
const Flex29Cb = useFlex29Cb()
const Div23Props = useStore((state)=>state["Blog"]["Div23"]);
const Div23IoProps = useIoStore((state)=>state["Blog"]["Div23"]);
const Div23Cb = useDiv23Cb()
const Div24Props = useStore((state)=>state["Blog"]["Div24"]);
const Div24IoProps = useIoStore((state)=>state["Blog"]["Div24"]);
const Div24Cb = useDiv24Cb()
const Flex30Props = useStore((state)=>state["Blog"]["Flex30"]);
const Flex30IoProps = useIoStore((state)=>state["Blog"]["Flex30"]);
const Flex30Cb = useFlex30Cb()
const Div25Props = useStore((state)=>state["Blog"]["Div25"]);
const Div25IoProps = useIoStore((state)=>state["Blog"]["Div25"]);
const Div25Cb = useDiv25Cb()
const Div29Props = useStore((state)=>state["Blog"]["Div29"]);
const Div29IoProps = useIoStore((state)=>state["Blog"]["Div29"]);
const Div29Cb = useDiv29Cb()
const Div30Props = useStore((state)=>state["Blog"]["Div30"]);
const Div30IoProps = useIoStore((state)=>state["Blog"]["Div30"]);
const Div30Cb = useDiv30Cb()
const Flex31Props = useStore((state)=>state["Blog"]["Flex31"]);
const Flex31IoProps = useIoStore((state)=>state["Blog"]["Flex31"]);
const Flex31Cb = useFlex31Cb()
const Flex33Props = useStore((state)=>state["Blog"]["Flex33"]);
const Flex33IoProps = useIoStore((state)=>state["Blog"]["Flex33"]);
const Flex33Cb = useFlex33Cb()
const Div31Props = useStore((state)=>state["Blog"]["Div31"]);
const Div31IoProps = useIoStore((state)=>state["Blog"]["Div31"]);
const Div31Cb = useDiv31Cb()
const Div32Props = useStore((state)=>state["Blog"]["Div32"]);
const Div32IoProps = useIoStore((state)=>state["Blog"]["Div32"]);
const Div32Cb = useDiv32Cb()
const Div35Props = useStore((state)=>state["Blog"]["Div35"]);
const Div35IoProps = useIoStore((state)=>state["Blog"]["Div35"]);
const Div35Cb = useDiv35Cb()
const Flex34Props = useStore((state)=>state["Blog"]["Flex34"]);
const Flex34IoProps = useIoStore((state)=>state["Blog"]["Flex34"]);
const Flex34Cb = useFlex34Cb()
const Div36Props = useStore((state)=>state["Blog"]["Div36"]);
const Div36IoProps = useIoStore((state)=>state["Blog"]["Div36"]);
const Div36Cb = useDiv36Cb()
const Div37Props = useStore((state)=>state["Blog"]["Div37"]);
const Div37IoProps = useIoStore((state)=>state["Blog"]["Div37"]);
const Div37Cb = useDiv37Cb()
const Flex35Props = useStore((state)=>state["Blog"]["Flex35"]);
const Flex35IoProps = useIoStore((state)=>state["Blog"]["Flex35"]);
const Flex35Cb = useFlex35Cb()
const Div40Props = useStore((state)=>state["Blog"]["Div40"]);
const Div40IoProps = useIoStore((state)=>state["Blog"]["Div40"]);
const Div40Cb = useDiv40Cb()
const Div41Props = useStore((state)=>state["Blog"]["Div41"]);
const Div41IoProps = useIoStore((state)=>state["Blog"]["Div41"]);
const Div41Cb = useDiv41Cb()
const Div42Props = useStore((state)=>state["Blog"]["Div42"]);
const Div42IoProps = useIoStore((state)=>state["Blog"]["Div42"]);
const Div42Cb = useDiv42Cb()
const TextBox3Props = useStore((state)=>state["Blog"]["TextBox3"]);
const TextBox3IoProps = useIoStore((state)=>state["Blog"]["TextBox3"]);
const TextBox3Cb = useTextBox3Cb()
const TextBox4Props = useStore((state)=>state["Blog"]["TextBox4"]);
const TextBox4IoProps = useIoStore((state)=>state["Blog"]["TextBox4"]);
const TextBox4Cb = useTextBox4Cb()
const TextBox5Props = useStore((state)=>state["Blog"]["TextBox5"]);
const TextBox5IoProps = useIoStore((state)=>state["Blog"]["TextBox5"]);
const TextBox5Cb = useTextBox5Cb()
const Image1Props = useStore((state)=>state["Blog"]["Image1"]);
const Image1IoProps = useIoStore((state)=>state["Blog"]["Image1"]);
const Image1Cb = useImage1Cb()
const Image2Props = useStore((state)=>state["Blog"]["Image2"]);
const Image2IoProps = useIoStore((state)=>state["Blog"]["Image2"]);
const Image2Cb = useImage2Cb()
const Image3Props = useStore((state)=>state["Blog"]["Image3"]);
const Image3IoProps = useIoStore((state)=>state["Blog"]["Image3"]);
const Image3Cb = useImage3Cb()
const Image4Props = useStore((state)=>state["Blog"]["Image4"]);
const Image4IoProps = useIoStore((state)=>state["Blog"]["Image4"]);
const Image4Cb = useImage4Cb()
const TextBox8Props = useStore((state)=>state["Blog"]["TextBox8"]);
const TextBox8IoProps = useIoStore((state)=>state["Blog"]["TextBox8"]);
const TextBox8Cb = useTextBox8Cb()
const TextBox9Props = useStore((state)=>state["Blog"]["TextBox9"]);
const TextBox9IoProps = useIoStore((state)=>state["Blog"]["TextBox9"]);
const TextBox9Cb = useTextBox9Cb()
const TextBox10Props = useStore((state)=>state["Blog"]["TextBox10"]);
const TextBox10IoProps = useIoStore((state)=>state["Blog"]["TextBox10"]);
const TextBox10Cb = useTextBox10Cb()
const TextBox7Props = useStore((state)=>state["Blog"]["TextBox7"]);
const TextBox7IoProps = useIoStore((state)=>state["Blog"]["TextBox7"]);
const TextBox7Cb = useTextBox7Cb()
const TextBox11Props = useStore((state)=>state["Blog"]["TextBox11"]);
const TextBox11IoProps = useIoStore((state)=>state["Blog"]["TextBox11"]);
const TextBox11Cb = useTextBox11Cb()
const TextBox12Props = useStore((state)=>state["Blog"]["TextBox12"]);
const TextBox12IoProps = useIoStore((state)=>state["Blog"]["TextBox12"]);
const TextBox12Cb = useTextBox12Cb()
const TextBox13Props = useStore((state)=>state["Blog"]["TextBox13"]);
const TextBox13IoProps = useIoStore((state)=>state["Blog"]["TextBox13"]);
const TextBox13Cb = useTextBox13Cb()
const TextBox18Props = useStore((state)=>state["Blog"]["TextBox18"]);
const TextBox18IoProps = useIoStore((state)=>state["Blog"]["TextBox18"]);
const TextBox18Cb = useTextBox18Cb()
const TextBox19Props = useStore((state)=>state["Blog"]["TextBox19"]);
const TextBox19IoProps = useIoStore((state)=>state["Blog"]["TextBox19"]);
const TextBox19Cb = useTextBox19Cb()
const TextBox20Props = useStore((state)=>state["Blog"]["TextBox20"]);
const TextBox20IoProps = useIoStore((state)=>state["Blog"]["TextBox20"]);
const TextBox20Cb = useTextBox20Cb()
const TextBox21Props = useStore((state)=>state["Blog"]["TextBox21"]);
const TextBox21IoProps = useIoStore((state)=>state["Blog"]["TextBox21"]);
const TextBox21Cb = useTextBox21Cb()
const TextBox33Props = useStore((state)=>state["Blog"]["TextBox33"]);
const TextBox33IoProps = useIoStore((state)=>state["Blog"]["TextBox33"]);
const TextBox33Cb = useTextBox33Cb()
const TextBox34Props = useStore((state)=>state["Blog"]["TextBox34"]);
const TextBox34IoProps = useIoStore((state)=>state["Blog"]["TextBox34"]);
const TextBox34Cb = useTextBox34Cb()
const TextBox35Props = useStore((state)=>state["Blog"]["TextBox35"]);
const TextBox35IoProps = useIoStore((state)=>state["Blog"]["TextBox35"]);
const TextBox35Cb = useTextBox35Cb()
const TextBox48Props = useStore((state)=>state["Blog"]["TextBox48"]);
const TextBox48IoProps = useIoStore((state)=>state["Blog"]["TextBox48"]);
const TextBox48Cb = useTextBox48Cb()
const TextBox49Props = useStore((state)=>state["Blog"]["TextBox49"]);
const TextBox49IoProps = useIoStore((state)=>state["Blog"]["TextBox49"]);
const TextBox49Cb = useTextBox49Cb()
const TextBox50Props = useStore((state)=>state["Blog"]["TextBox50"]);
const TextBox50IoProps = useIoStore((state)=>state["Blog"]["TextBox50"]);
const TextBox50Cb = useTextBox50Cb()
const TextBox51Props = useStore((state)=>state["Blog"]["TextBox51"]);
const TextBox51IoProps = useIoStore((state)=>state["Blog"]["TextBox51"]);
const TextBox51Cb = useTextBox51Cb()
const TextBox52Props = useStore((state)=>state["Blog"]["TextBox52"]);
const TextBox52IoProps = useIoStore((state)=>state["Blog"]["TextBox52"]);
const TextBox52Cb = useTextBox52Cb()
const TextBox53Props = useStore((state)=>state["Blog"]["TextBox53"]);
const TextBox53IoProps = useIoStore((state)=>state["Blog"]["TextBox53"]);
const TextBox53Cb = useTextBox53Cb()
const TextBox54Props = useStore((state)=>state["Blog"]["TextBox54"]);
const TextBox54IoProps = useIoStore((state)=>state["Blog"]["TextBox54"]);
const TextBox54Cb = useTextBox54Cb()
const TextBox55Props = useStore((state)=>state["Blog"]["TextBox55"]);
const TextBox55IoProps = useIoStore((state)=>state["Blog"]["TextBox55"]);
const TextBox55Cb = useTextBox55Cb()
const Image6Props = useStore((state)=>state["Blog"]["Image6"]);
const Image6IoProps = useIoStore((state)=>state["Blog"]["Image6"]);
const Image6Cb = useImage6Cb()
const TextBox57Props = useStore((state)=>state["Blog"]["TextBox57"]);
const TextBox57IoProps = useIoStore((state)=>state["Blog"]["TextBox57"]);
const TextBox57Cb = useTextBox57Cb()
const TextBox58Props = useStore((state)=>state["Blog"]["TextBox58"]);
const TextBox58IoProps = useIoStore((state)=>state["Blog"]["TextBox58"]);
const TextBox58Cb = useTextBox58Cb()
const TextBox59Props = useStore((state)=>state["Blog"]["TextBox59"]);
const TextBox59IoProps = useIoStore((state)=>state["Blog"]["TextBox59"]);
const TextBox59Cb = useTextBox59Cb()
const TextBox61Props = useStore((state)=>state["Blog"]["TextBox61"]);
const TextBox61IoProps = useIoStore((state)=>state["Blog"]["TextBox61"]);
const TextBox61Cb = useTextBox61Cb()
const TextBox62Props = useStore((state)=>state["Blog"]["TextBox62"]);
const TextBox62IoProps = useIoStore((state)=>state["Blog"]["TextBox62"]);
const TextBox62Cb = useTextBox62Cb()
const Accordion1Props = useStore((state)=>state["Blog"]["Accordion1"]);
const Accordion1IoProps = useIoStore((state)=>state["Blog"]["Accordion1"]);
const Accordion1Cb = useAccordion1Cb()
const Accordion2Props = useStore((state)=>state["Blog"]["Accordion2"]);
const Accordion2IoProps = useIoStore((state)=>state["Blog"]["Accordion2"]);
const Accordion2Cb = useAccordion2Cb()
const Accordion3Props = useStore((state)=>state["Blog"]["Accordion3"]);
const Accordion3IoProps = useIoStore((state)=>state["Blog"]["Accordion3"]);
const Accordion3Cb = useAccordion3Cb()
const Accordion4Props = useStore((state)=>state["Blog"]["Accordion4"]);
const Accordion4IoProps = useIoStore((state)=>state["Blog"]["Accordion4"]);
const Accordion4Cb = useAccordion4Cb()
const Accordion5Props = useStore((state)=>state["Blog"]["Accordion5"]);
const Accordion5IoProps = useIoStore((state)=>state["Blog"]["Accordion5"]);
const Accordion5Cb = useAccordion5Cb()
const Accordion6Props = useStore((state)=>state["Blog"]["Accordion6"]);
const Accordion6IoProps = useIoStore((state)=>state["Blog"]["Accordion6"]);
const Accordion6Cb = useAccordion6Cb()
const Accordion7Props = useStore((state)=>state["Blog"]["Accordion7"]);
const Accordion7IoProps = useIoStore((state)=>state["Blog"]["Accordion7"]);
const Accordion7Cb = useAccordion7Cb()
const Accordion8Props = useStore((state)=>state["Blog"]["Accordion8"]);
const Accordion8IoProps = useIoStore((state)=>state["Blog"]["Accordion8"]);
const Accordion8Cb = useAccordion8Cb()
const TextBox65Props = useStore((state)=>state["Blog"]["TextBox65"]);
const TextBox65IoProps = useIoStore((state)=>state["Blog"]["TextBox65"]);
const TextBox65Cb = useTextBox65Cb()
const TextBox66Props = useStore((state)=>state["Blog"]["TextBox66"]);
const TextBox66IoProps = useIoStore((state)=>state["Blog"]["TextBox66"]);
const TextBox66Cb = useTextBox66Cb()
const TextBox67Props = useStore((state)=>state["Blog"]["TextBox67"]);
const TextBox67IoProps = useIoStore((state)=>state["Blog"]["TextBox67"]);
const TextBox67Cb = useTextBox67Cb()
const TextBox68Props = useStore((state)=>state["Blog"]["TextBox68"]);
const TextBox68IoProps = useIoStore((state)=>state["Blog"]["TextBox68"]);
const TextBox68Cb = useTextBox68Cb()
const TextBox69Props = useStore((state)=>state["Blog"]["TextBox69"]);
const TextBox69IoProps = useIoStore((state)=>state["Blog"]["TextBox69"]);
const TextBox69Cb = useTextBox69Cb()
const TextBox73Props = useStore((state)=>state["Blog"]["TextBox73"]);
const TextBox73IoProps = useIoStore((state)=>state["Blog"]["TextBox73"]);
const TextBox73Cb = useTextBox73Cb()
const TextBox74Props = useStore((state)=>state["Blog"]["TextBox74"]);
const TextBox74IoProps = useIoStore((state)=>state["Blog"]["TextBox74"]);
const TextBox74Cb = useTextBox74Cb()
const TextBox75Props = useStore((state)=>state["Blog"]["TextBox75"]);
const TextBox75IoProps = useIoStore((state)=>state["Blog"]["TextBox75"]);
const TextBox75Cb = useTextBox75Cb()
const TextBox70Props = useStore((state)=>state["Blog"]["TextBox70"]);
const TextBox70IoProps = useIoStore((state)=>state["Blog"]["TextBox70"]);
const TextBox70Cb = useTextBox70Cb()
const TextBox71Props = useStore((state)=>state["Blog"]["TextBox71"]);
const TextBox71IoProps = useIoStore((state)=>state["Blog"]["TextBox71"]);
const TextBox71Cb = useTextBox71Cb()
const TextBox72Props = useStore((state)=>state["Blog"]["TextBox72"]);
const TextBox72IoProps = useIoStore((state)=>state["Blog"]["TextBox72"]);
const TextBox72Cb = useTextBox72Cb()
const TextBox76Props = useStore((state)=>state["Blog"]["TextBox76"]);
const TextBox76IoProps = useIoStore((state)=>state["Blog"]["TextBox76"]);
const TextBox76Cb = useTextBox76Cb()
const TextBox77Props = useStore((state)=>state["Blog"]["TextBox77"]);
const TextBox77IoProps = useIoStore((state)=>state["Blog"]["TextBox77"]);
const TextBox77Cb = useTextBox77Cb()
const TextBox78Props = useStore((state)=>state["Blog"]["TextBox78"]);
const TextBox78IoProps = useIoStore((state)=>state["Blog"]["TextBox78"]);
const TextBox78Cb = useTextBox78Cb()

  return (<>
  <Flex className="p-Blog Flex1 bpt" {...Flex1Props} {...Flex1Cb} {...Flex1IoProps}>
<Div className="p-Blog Div2 bpt" {...Div2Props} {...Div2Cb} {...Div2IoProps}>
<TextBox className="p-Blog TextBox4 bpt" {...TextBox4Props} {...TextBox4Cb} {...TextBox4IoProps}/>
<TextBox className="p-Blog TextBox3 bpt" {...TextBox3Props} {...TextBox3Cb} {...TextBox3IoProps}/>
</Div>
<Div className="p-Blog Div3 bpt" {...Div3Props} {...Div3Cb} {...Div3IoProps}>
<TextBox className="p-Blog TextBox5 bpt" {...TextBox5Props} {...TextBox5Cb} {...TextBox5IoProps}/>
</Div>
</Flex>
<Flex className="p-Blog Image bpt" {...ImageProps} {...ImageCb} {...ImageIoProps}>
<Image className="p-Blog Image1 bpt" {...Image1Props} {...Image1Cb} {...Image1IoProps}/>
<Image className="p-Blog Image2 bpt" {...Image2Props} {...Image2Cb} {...Image2IoProps}/>
<Flex className="p-Blog Flex3 bpt" {...Flex3Props} {...Flex3Cb} {...Flex3IoProps}>
<Image className="p-Blog Image3 bpt" {...Image3Props} {...Image3Cb} {...Image3IoProps}/>
<Image className="p-Blog Image4 bpt" {...Image4Props} {...Image4Cb} {...Image4IoProps}/>
</Flex>
</Flex>
<Flex className="p-Blog Flex10 bpt" {...Flex10Props} {...Flex10Cb} {...Flex10IoProps}>
<Div className="p-Blog Div5 bpt" {...Div5Props} {...Div5Cb} {...Div5IoProps}>
<Div className="p-Blog Div8 bpt" {...Div8Props} {...Div8Cb} {...Div8IoProps}>
<Flex className="p-Blog Flex12 bpt" {...Flex12Props} {...Flex12Cb} {...Flex12IoProps}>
<TextBox className="p-Blog TextBox7 bpt" {...TextBox7Props} {...TextBox7Cb} {...TextBox7IoProps}/>
</Flex>
</Div>
<Div className="p-Blog Div7 bpt" {...Div7Props} {...Div7Cb} {...Div7IoProps}>
<TextBox className="p-Blog TextBox8 bpt" {...TextBox8Props} {...TextBox8Cb} {...TextBox8IoProps}/>
<Flex className="p-Blog Flex11 bpt" {...Flex11Props} {...Flex11Cb} {...Flex11IoProps}>
<TextBox className="p-Blog TextBox9 bpt" {...TextBox9Props} {...TextBox9Cb} {...TextBox9IoProps}/>
<TextBox className="p-Blog TextBox10 bpt" {...TextBox10Props} {...TextBox10Cb} {...TextBox10IoProps}/>
</Flex>
</Div>
<Div className="p-Blog Div10 bpt" {...Div10Props} {...Div10Cb} {...Div10IoProps}>
<TextBox className="p-Blog TextBox11 bpt" {...TextBox11Props} {...TextBox11Cb} {...TextBox11IoProps}/>
<Flex className="p-Blog Flex13 bpt" {...Flex13Props} {...Flex13Cb} {...Flex13IoProps}>
<TextBox className="p-Blog TextBox12 bpt" {...TextBox12Props} {...TextBox12Cb} {...TextBox12IoProps}/>
<TextBox className="p-Blog TextBox13 bpt" {...TextBox13Props} {...TextBox13Cb} {...TextBox13IoProps}/>
</Flex>
</Div>
<Div className="p-Blog Div13 bpt" {...Div13Props} {...Div13Cb} {...Div13IoProps}>
<TextBox className="p-Blog TextBox18 bpt" {...TextBox18Props} {...TextBox18Cb} {...TextBox18IoProps}/>
<Flex className="p-Blog Flex17 bpt" {...Flex17Props} {...Flex17Cb} {...Flex17IoProps}>
<TextBox className="p-Blog TextBox19 bpt" {...TextBox19Props} {...TextBox19Cb} {...TextBox19IoProps}/>
<TextBox className="p-Blog TextBox20 bpt" {...TextBox20Props} {...TextBox20Cb} {...TextBox20IoProps}/>
</Flex>
</Div>
</Div>
<Div className="p-Blog Div6 bpt" {...Div6Props} {...Div6Cb} {...Div6IoProps}>
<TextBox className="p-Blog TextBox21 bpt" {...TextBox21Props} {...TextBox21Cb} {...TextBox21IoProps}/>
<Div className="p-Blog Div21 bpt" {...Div21Props} {...Div21Cb} {...Div21IoProps}>
<TextBox className="p-Blog TextBox48 bpt" {...TextBox48Props} {...TextBox48Cb} {...TextBox48IoProps}/>
<Flex className="p-Blog Flex28 bpt" {...Flex28Props} {...Flex28Cb} {...Flex28IoProps}>
<TextBox className="p-Blog TextBox49 bpt" {...TextBox49Props} {...TextBox49Cb} {...TextBox49IoProps}/>
<TextBox className="p-Blog TextBox50 bpt" {...TextBox50Props} {...TextBox50Cb} {...TextBox50IoProps}/>
</Flex>
</Div>
<Div className="p-Blog Div17 bpt" {...Div17Props} {...Div17Cb} {...Div17IoProps}>
<TextBox className="p-Blog TextBox33 bpt" {...TextBox33Props} {...TextBox33Cb} {...TextBox33IoProps}/>
<Flex className="p-Blog Flex24 bpt" {...Flex24Props} {...Flex24Cb} {...Flex24IoProps}>
<TextBox className="p-Blog TextBox35 bpt" {...TextBox35Props} {...TextBox35Cb} {...TextBox35IoProps}/>
<TextBox className="p-Blog TextBox34 bpt" {...TextBox34Props} {...TextBox34Cb} {...TextBox34IoProps}/>
</Flex>
</Div>
<Div className="p-Blog Div22 bpt" {...Div22Props} {...Div22Cb} {...Div22IoProps}>
<TextBox className="p-Blog TextBox51 bpt" {...TextBox51Props} {...TextBox51Cb} {...TextBox51IoProps}/>
<Flex className="p-Blog Flex29 bpt" {...Flex29Props} {...Flex29Cb} {...Flex29IoProps}>
<TextBox className="p-Blog TextBox52 bpt" {...TextBox52Props} {...TextBox52Cb} {...TextBox52IoProps}/>
<TextBox className="p-Blog TextBox53 bpt" {...TextBox53Props} {...TextBox53Cb} {...TextBox53IoProps}/>
</Flex>
</Div>
</Div>
</Flex>
<Div className="p-Blog Div23 bpt" {...Div23Props} {...Div23Cb} {...Div23IoProps}>
<TextBox className="p-Blog TextBox54 bpt" {...TextBox54Props} {...TextBox54Cb} {...TextBox54IoProps}/>
<TextBox className="p-Blog TextBox55 bpt" {...TextBox55Props} {...TextBox55Cb} {...TextBox55IoProps}/>
<Div className="p-Blog Div24 bpt" {...Div24Props} {...Div24Cb} {...Div24IoProps}>
<Flex className="p-Blog Flex30 bpt" {...Flex30Props} {...Flex30Cb} {...Flex30IoProps}>
<Image className="p-Blog Image6 bpt" {...Image6Props} {...Image6Cb} {...Image6IoProps}/>
<Div className="p-Blog Div25 bpt" {...Div25Props} {...Div25Cb} {...Div25IoProps}>
<TextBox className="p-Blog TextBox57 bpt" {...TextBox57Props} {...TextBox57Cb} {...TextBox57IoProps}/>
<TextBox className="p-Blog TextBox58 bpt" {...TextBox58Props} {...TextBox58Cb} {...TextBox58IoProps}/>
<TextBox className="p-Blog TextBox59 bpt" {...TextBox59Props} {...TextBox59Cb} {...TextBox59IoProps}/>
</Div>
</Flex>
</Div>
</Div>
<Div className="p-Blog Div29 bpt" {...Div29Props} {...Div29Cb} {...Div29IoProps}>
<Div className="p-Blog Div30 bpt" {...Div30Props} {...Div30Cb} {...Div30IoProps}>
<Flex className="p-Blog Flex31 bpt" {...Flex31Props} {...Flex31Cb} {...Flex31IoProps}>
<TextBox className="p-Blog TextBox61 bpt" {...TextBox61Props} {...TextBox61Cb} {...TextBox61IoProps}/>
<TextBox className="p-Blog TextBox62 bpt" {...TextBox62Props} {...TextBox62Cb} {...TextBox62IoProps}/>
</Flex>
<Flex className="p-Blog Flex33 bpt" {...Flex33Props} {...Flex33Cb} {...Flex33IoProps}>
<Div className="p-Blog Div31 bpt" {...Div31Props} {...Div31Cb} {...Div31IoProps}>
<Accordion className="p-Blog Accordion1 bpt" {...Accordion1Props} {...Accordion1Cb} {...Accordion1IoProps}/>
<Accordion className="p-Blog Accordion3 bpt" {...Accordion3Props} {...Accordion3Cb} {...Accordion3IoProps}/>
<Accordion className="p-Blog Accordion4 bpt" {...Accordion4Props} {...Accordion4Cb} {...Accordion4IoProps}/>
<Accordion className="p-Blog Accordion2 bpt" {...Accordion2Props} {...Accordion2Cb} {...Accordion2IoProps}/>
</Div>
<Div className="p-Blog Div32 bpt" {...Div32Props} {...Div32Cb} {...Div32IoProps}>
<Accordion className="p-Blog Accordion5 bpt" {...Accordion5Props} {...Accordion5Cb} {...Accordion5IoProps}/>
<Accordion className="p-Blog Accordion6 bpt" {...Accordion6Props} {...Accordion6Cb} {...Accordion6IoProps}/>
<Accordion className="p-Blog Accordion7 bpt" {...Accordion7Props} {...Accordion7Cb} {...Accordion7IoProps}/>
<Accordion className="p-Blog Accordion8 bpt" {...Accordion8Props} {...Accordion8Cb} {...Accordion8IoProps}/>
</Div>
</Flex>
<Div className="p-Blog Div35 bpt" {...Div35Props} {...Div35Cb} {...Div35IoProps}>
<TextBox className="p-Blog TextBox65 bpt" {...TextBox65Props} {...TextBox65Cb} {...TextBox65IoProps}/>
<TextBox className="p-Blog TextBox66 bpt" {...TextBox66Props} {...TextBox66Cb} {...TextBox66IoProps}/>
<Flex className="p-Blog Flex34 bpt" {...Flex34Props} {...Flex34Cb} {...Flex34IoProps}>
<Div className="p-Blog Div36 bpt" {...Div36Props} {...Div36Cb} {...Div36IoProps}>
<TextBox className="p-Blog TextBox67 bpt" {...TextBox67Props} {...TextBox67Cb} {...TextBox67IoProps}/>
<TextBox className="p-Blog TextBox68 bpt" {...TextBox68Props} {...TextBox68Cb} {...TextBox68IoProps}/>
<TextBox className="p-Blog TextBox69 bpt" {...TextBox69Props} {...TextBox69Cb} {...TextBox69IoProps}/>
</Div>
<Div className="p-Blog Div37 bpt" {...Div37Props} {...Div37Cb} {...Div37IoProps}>
<Flex className="p-Blog Flex35 bpt" {...Flex35Props} {...Flex35Cb} {...Flex35IoProps}>
<Div className="p-Blog Div41 bpt" {...Div41Props} {...Div41Cb} {...Div41IoProps}>
<TextBox className="p-Blog TextBox70 bpt" {...TextBox70Props} {...TextBox70Cb} {...TextBox70IoProps}/>
<TextBox className="p-Blog TextBox71 bpt" {...TextBox71Props} {...TextBox71Cb} {...TextBox71IoProps}/>
<TextBox className="p-Blog TextBox72 bpt" {...TextBox72Props} {...TextBox72Cb} {...TextBox72IoProps}/>
</Div>
<Div className="p-Blog Div40 bpt" {...Div40Props} {...Div40Cb} {...Div40IoProps}>
<TextBox className="p-Blog TextBox73 bpt" {...TextBox73Props} {...TextBox73Cb} {...TextBox73IoProps}/>
<TextBox className="p-Blog TextBox74 bpt" {...TextBox74Props} {...TextBox74Cb} {...TextBox74IoProps}/>
<TextBox className="p-Blog TextBox75 bpt" {...TextBox75Props} {...TextBox75Cb} {...TextBox75IoProps}/>
</Div>
<Div className="p-Blog Div42 bpt" {...Div42Props} {...Div42Cb} {...Div42IoProps}>
<TextBox className="p-Blog TextBox76 bpt" {...TextBox76Props} {...TextBox76Cb} {...TextBox76IoProps}/>
<TextBox className="p-Blog TextBox77 bpt" {...TextBox77Props} {...TextBox77Cb} {...TextBox77IoProps}/>
<TextBox className="p-Blog TextBox78 bpt" {...TextBox78Props} {...TextBox78Cb} {...TextBox78IoProps}/>
</Div>
</Flex>
</Div>
</Flex>
</Div>
</Div>
</Div>
  </>);
}
