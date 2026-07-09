import svgPaths from "./svg-odbsr4nica";
import imgContainer from "./19b967ea2e61a707b10e12f774d01dbb805b4943.png";

function Group1() {
  return (
    <div className="relative shrink-0 size-[40px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Group 1">
          <path d={svgPaths.pc17b8a0} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p49a7900} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center relative rounded-[12px] shrink-0 w-[65px]">
      <Group1 />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title">
      <p className="[word-break:break-word] font-['American_Grotesk:Bold',sans-serif] leading-[1.334] not-italic relative shrink-0 text-[#fffffc] text-[24px] whitespace-nowrap">Sites</p>
    </div>
  );
}

function LeftSide() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Left Side">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] relative size-full">
          <Title />
        </div>
      </div>
    </div>
  );
}

function AppBarSearchInput() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative rounded-[12px]" data-name="App Bar Search Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[6px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Search">
            <div className="absolute inset-[12.5%_14.63%_14.63%_12.5%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.49 17.49">
                <path d={svgPaths.p3b681e80} fill="var(--fill-0, #F9F8F5)" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Typography">
            <p className="[word-break:break-word] font-['Test_American_Grotesk:Regular','Noto_Sans:Regular',sans-serif] leading-[1.5] opacity-42 relative shrink-0 text-[#f9f8f5] text-[16px] tracking-[0.15px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
              Search...
            </p>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex h-[46px] items-center relative shrink-0">
      <div className="flex flex-row items-center self-stretch">
        <div className="content-stretch flex gap-[8px] h-full items-center justify-center relative shrink-0 w-[286px]" data-name="Search">
          <AppBarSearchInput />
        </div>
      </div>
    </div>
  );
}

function Number() {
  return (
    <div className="absolute bg-[#e74a4f] left-[86px] rounded-[100px] size-[8px] top-[11px]" data-name="Number">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#c7d6df] content-stretch flex items-center justify-center relative rounded-[99px] shrink-0 size-[30px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:SemiBold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">TR</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-0.01px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[15.6px]">Taylor Reed</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[11.5px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Ops Manager</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[76px]" data-name="Container">
      <Container1 />
      <Container2 />
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="content-stretch flex gap-[10px] items-center pb-[2px] px-[12px] relative shrink-0" data-name="HorizontalBorder">
      <Background />
      <Container />
    </div>
  );
}

function Manu() {
  return (
    <div className="content-stretch flex items-center px-[10px] relative shrink-0" data-name="Manu">
      <div className="content-stretch flex items-start relative shrink-0" data-name="Notifications">
        <div className="content-stretch flex items-center p-[12px] relative rounded-[48px] shrink-0" data-name="UnstyledIconButton">
          <div className="content-stretch flex items-start relative shrink-0" data-name="Icon">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Notifications">
              <div className="absolute inset-[10.42%_16.67%_8.33%_16.67%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 19.5">
                  <path d={svgPaths.p28465100} fill="var(--fill-0, #FFFFFC)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Number />
      <HorizontalBorder />
    </div>
  );
}

function AppBar() {
  return (
    <div className="bg-[#171a20] content-stretch flex h-[64px] items-center overflow-clip px-[12px] py-[8px] relative shrink-0 w-[1440px]" data-name="App Bar">
      <Frame1 />
      <LeftSide />
      <Frame2 />
      <Manu />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Header">
      <AppBar />
    </div>
  );
}

function IconButton() {
  return <div className="bg-white h-px relative shrink-0 w-full" data-name="IconButton" />;
}

function IconButton1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="IconButton">
      <div className="content-stretch flex items-center p-[4px] relative rounded-[48px] shrink-0" data-name="UnstyledIconButton">
        <div className="content-stretch flex items-start relative shrink-0" data-name="Icon">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="DoubleArrow">
            <div className="absolute inset-[20.83%_14.58%_20.83%_16.67%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.75 11.6667">
                <g id="Vector">
                  <path d={svgPaths.p6e7d780} fill="white" />
                  <path d={svgPaths.p2d9471f1} fill="white" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[32px] relative shrink-0" data-name="Container">
      <div className="content-stretch flex items-start relative shrink-0" data-name="Icon">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Dashboard">
          <div className="absolute inset-[12.5%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <path d={svgPaths.p12df5ef0} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextContainer() {
  return <div className="flex-[1_0_0] h-[32px] min-w-px relative" data-name="Text Container" />;
}

function ListItem() {
  return (
    <div className="relative shrink-0 w-full" data-name="ListItem">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <Container3 />
          <TextContainer />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[32px] relative shrink-0" data-name="Container">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Apartment">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.p15a4ff00} fill="var(--fill-0, #CAD8DF)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TextContainer1() {
  return <div className="flex-[1_0_0] h-[32px] min-w-px relative" data-name="Text Container" />;
}

function ListItem1() {
  return (
    <div className="relative shrink-0 w-full" data-name="ListItem">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <Container4 />
          <TextContainer1 />
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[32px] relative shrink-0" data-name="Container">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Hvac">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <g id="Vector">
              <path d={svgPaths.pfb9c600} fill="white" />
              <path d={svgPaths.p38d09980} fill="white" />
              <path d={svgPaths.p28d58300} fill="white" />
              <path d={svgPaths.p2bc1ef00} fill="white" />
              <path d={svgPaths.p167d2380} fill="white" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function TextContainer2() {
  return <div className="flex-[1_0_0] h-[32px] min-w-px relative" data-name="Text Container" />;
}

function ListItem2() {
  return (
    <div className="relative shrink-0 w-full" data-name="ListItem">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <Container5 />
          <TextContainer2 />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[32px] relative shrink-0" data-name="Container">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Notifications">
        <div className="absolute inset-[10.42%_16.67%_8.33%_16.67%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 19.5">
            <path d={svgPaths.p28465100} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TextContainer3() {
  return <div className="flex-[1_0_0] h-[32px] min-w-px relative" data-name="Text Container" />;
}

function ListItem3() {
  return (
    <div className="relative shrink-0 w-full" data-name="ListItem">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <Container6 />
          <TextContainer3 />
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[32px] relative shrink-0" data-name="Container">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Build">
        <div className="absolute inset-[4.58%_4.21%_4.17%_3.98%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.0329 21.9002">
            <path d={svgPaths.p2688c000} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TextContainer4() {
  return <div className="flex-[1_0_0] h-[32px] min-w-px relative" data-name="Text Container" />;
}

function ListItem4() {
  return (
    <div className="relative shrink-0 w-full" data-name="ListItem">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <Container7 />
          <TextContainer4 />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[32px] relative shrink-0" data-name="Container">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="BarChart">
        <div className="absolute inset-[20.83%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p17fe1c00} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TextContainer5() {
  return <div className="flex-[1_0_0] h-[32px] min-w-px relative" data-name="Text Container" />;
}

function ListItem5() {
  return (
    <div className="relative shrink-0 w-full" data-name="ListItem">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <Container8 />
          <TextContainer5 />
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[32px] relative shrink-0" data-name="Container">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="InsertDriveFile">
        <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
            <path d={svgPaths.p1e578210} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TextContainer6() {
  return <div className="flex-[1_0_0] h-[32px] min-w-px relative" data-name="Text Container" />;
}

function ListItem6() {
  return (
    <div className="relative shrink-0 w-full" data-name="ListItem">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <Container9 />
          <TextContainer6 />
        </div>
      </div>
    </div>
  );
}

function Ul() {
  return (
    <div className="content-stretch flex flex-col h-[850px] items-start relative shrink-0 w-full" data-name="ul">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
      <ListItem4 />
      <ListItem5 />
      <ListItem6 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[6px] items-start leading-[0] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="Paragraph">
      <div className="flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#456c88] text-[14px]" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="[text-underline-position:from-font] decoration-from-font decoration-solid leading-[normal] underline">{`Sites `}</p>
      </div>
      <div className="flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#808080] text-[14px]" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">/</p>
      </div>
      <div className="flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#456c88] text-[12.5px]" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="[text-underline-position:from-font] decoration-from-font decoration-solid leading-[normal] underline">Austin – Lamar Blvd</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[24px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Austin – Lamar Blvd</p>
      </div>
    </div>
  );
}

function Border() {
  return (
    <div className="bg-[rgba(231,74,79,0.1)] content-stretch flex gap-[7px] items-center px-[12.625px] py-[5.625px] relative rounded-[99px] shrink-0" data-name="Border">
      <div className="bg-[#9b2020] relative rounded-[99px] shrink-0 size-[6.99px]" data-name="Background" />
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#9b2020] text-[12.5px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">1 fault</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[14px] items-center pt-[6px] relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Border />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[13.5px] w-full" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">2201 S Lamar Blvd, Austin, TX · 12,400 sq ft · Retail</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative">
      <Paragraph />
      <Container11 />
      <Container13 />
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-white relative rounded-[8px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#d0d0d0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start px-[18.625px] py-[10.625px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#456c88] text-[14px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
          <p className="leading-[normal]">Site settings</p>
        </div>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#456c88] relative rounded-[8px] self-stretch shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col items-start px-[18px] py-[10px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white uppercase whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
          <p className="leading-[normal]">Adjust controls</p>
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex gap-[10px] h-[39.25px] items-start relative shrink-0" data-name="Container">
      <BackgroundBorder />
      <Background1 />
    </div>
  );
}

function Container15() {
  return (
    <div className="relative rounded-[200px] shrink-0 size-[100px]" data-name="Container">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[200px]">
        <div className="absolute inset-0 rounded-[200px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(21, 93, 252) 0%, rgb(43, 127, 255) 50%, rgb(152, 16, 250) 100%)" }} />
        <img alt="" className="absolute max-w-none object-cover rounded-[200px] size-full" src={imgContainer} />
        <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.5)] inset-0 rounded-[200px] to-[rgba(0,0,0,0.2)] via-1/2 via-[rgba(0,0,0,0)]" />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0">
      <Container15 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0 w-full">
      <Frame3 />
      <Container14 />
      <Frame5 />
    </div>
  );
}

function BackgroundHorizontalBorder() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Background+HorizontalBorder">
      <div aria-hidden className="absolute border-[#e8e8e8] border-b-[0.625px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-[24px] pt-[18px] px-[28px] relative size-full">
        <Frame4 />
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="relative self-stretch shrink-0 w-[100px]" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#171a20] border-b-[1.875px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pb-[12.875px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[14px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
            <p className="leading-[normal]">Overview</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative self-stretch shrink-0 w-[100px]" data-name="Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pb-[11px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[14px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
            <p className="leading-[normal]">Controllers</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="relative self-stretch shrink-0 w-[100px]" data-name="Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pb-[11px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[14px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
            <p className="leading-[normal]">Equipment</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="relative self-stretch shrink-0 w-[100px]" data-name="Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pb-[11px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[14px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
            <p className="leading-[normal]">Schedules</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative self-stretch shrink-0 w-[100px]" data-name="Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pb-[11px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[14px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
            <p className="leading-[normal]">Alerts</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="relative self-stretch shrink-0 w-[100px]" data-name="Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pb-[11px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[14px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
            <p className="leading-[normal]">History</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex gap-[26px] h-[42.865px] items-start pt-[11.99px] relative shrink-0 w-full" data-name="Container">
      <HorizontalBorder1 />
      <Container17 />
      <Container18 />
      <Container19 />
      <Container20 />
      <Container21 />
    </div>
  );
}

function BackgroundHorizontalBorder1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Background+HorizontalBorder">
      <div aria-hidden className="absolute border-[#e8e8e8] border-b-[0.625px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-[0.625px] pt-[18px] px-[28px] relative size-full">
        <Container16 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] capitalize flex flex-col font-['Google_Sans_Flex:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#201d1c] text-[16px] w-full" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Zones</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[13.5px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Sales Floor</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="flex-[1_0_0] h-[8px] min-w-[8px] relative" data-name="Margin">
      <div className="flex flex-col items-end min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end min-w-[inherit] pl-[67.92px] relative size-full">
          <div className="bg-[#9b2020] relative rounded-[99px] shrink-0 size-[8px]" data-name="Background" />
        </div>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Container28 />
      <Margin />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[30px] w-full" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[30px]">78.4°</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[14px] w-full" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal] mb-0">Set 74° · Cooling · 46%</p>
        <p className="leading-[normal]">RH</p>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#f2bdbf] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[18.625px] py-[16.625px] relative size-full">
        <Container27 />
        <Container29 />
        <Container30 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[13.5px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Back Office</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="flex-[1_0_0] h-[8px] min-w-[8px] relative" data-name="Margin">
      <div className="flex flex-col items-end min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end min-w-[inherit] pl-[63.535px] relative size-full">
          <div className="bg-[#1d7a5e] relative rounded-[99px] shrink-0 size-[8px]" data-name="Background" />
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex gap-[0.005px] items-center relative shrink-0 w-full" data-name="Container">
      <Container32 />
      <Margin1 />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[30px] w-full" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[30px]">72.2°</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[14px] w-full" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal] mb-0">Set 72° · Cooling · 44%</p>
        <p className="leading-[normal]">RH</p>
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#7fbfa8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[18.625px] py-[16.625px] relative size-full">
        <Container31 />
        <Container33 />
        <Container34 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-0.005px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[13.5px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Stock Room</p>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="flex-[1_0_0] h-[8px] min-w-[8px] relative" data-name="Margin">
      <div className="flex flex-col items-end min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end min-w-[inherit] pl-[60.225px] relative size-full">
          <div className="bg-[#1d7a5e] relative rounded-[99px] shrink-0 size-[8px]" data-name="Background" />
        </div>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Container36 />
      <Margin2 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[30px] w-full" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[30px]">69.8°</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[14px] w-full" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Set 70° · Idle · 51% RH</p>
      </div>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#7fbfa8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[32.24px] pt-[16.62px] px-[18.625px] relative size-full">
        <Container35 />
        <Container37 />
        <Container38 />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-0.005px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[13.5px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Vestibule</p>
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="flex-[1_0_0] h-[8px] min-w-[8px] relative" data-name="Margin">
      <div className="flex flex-col items-end min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end min-w-[inherit] pl-[78.555px] relative size-full">
          <div className="bg-[#1d7a5e] relative rounded-[99px] shrink-0 size-[8px]" data-name="Background" />
        </div>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Container40 />
      <Margin3 />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[30px] w-full" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[30px]">74.6°</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[14px] w-full" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Set 75° · Idle · 48% RH</p>
      </div>
    </div>
  );
}

function BackgroundBorder4() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#7fbfa8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[32.24px] pt-[16.62px] px-[18.625px] relative size-full">
        <Container39 />
        <Container41 />
        <Container42 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder1 />
      <BackgroundBorder2 />
      <BackgroundBorder3 />
      <BackgroundBorder4 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Container">
      <Container25 />
      <Container26 />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-0.009px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Equipment</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium','Noto_Sans_Symbols:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">All equipment →</p>
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="flex-[1_0_0] min-w-[104.79000091552734px] relative" data-name="Margin">
      <div className="flex flex-col items-end min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end min-w-[inherit] pl-[542.959px] relative size-full">
          <Container45 />
        </div>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex items-center pb-[8px] pt-[14px] relative shrink-0 w-full" data-name="Container">
      <Container44 />
      <Margin4 />
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[251px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#201d1c] text-[11px] tracking-[1.54px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">UNIT</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#201d1c] text-[11px] tracking-[1.54px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Status</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#201d1c] text-[11px] tracking-[1.54px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">MOde</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#201d1c] text-[11px] tracking-[1.54px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Runtime today</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#201d1c] text-[11px] tracking-[1.54px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Health</p>
      </div>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="bg-[#c7d6df] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#e8e8e8] border-b-[0.625px] border-solid inset-0 pointer-events-none rounded-tl-[12px] rounded-tr-[12px]" />
      <div className="content-stretch flex items-start p-[8px] relative size-full">
        <Container46 />
        <Container47 />
        <Container48 />
        <Container49 />
        <Container50 />
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">RTU-1 · Sales Floor</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="col-2 content-stretch flex gap-[7.99px] h-[17.5px] items-center justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="bg-[#1d7a5e] relative rounded-[99px] shrink-0 size-[8px]" data-name="Background" />
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Running</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Cool 2</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="col-4 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">6.4 h</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="col-5 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Good</p>
      </div>
    </div>
  );
}

function HorizontalBorder3() {
  return (
    <div className="h-[44.12px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#e8e8e8] border-b-[0.625px] border-solid inset-0 pointer-events-none" />
      <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[_____minmax(0,1.60fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] grid-rows-[_17.50px] pb-[13.625px] pl-[8px] pt-[13px] relative size-full">
        <Container51 />
        <Container52 />
        <Container53 />
        <Container54 />
        <Container55 />
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">RTU-2 · Sales Floor</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="col-2 content-stretch flex gap-[7.99px] h-[17.5px] items-center justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="bg-[#9b2020] relative rounded-[99px] shrink-0 size-[8px]" data-name="Background" />
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Fault</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">—</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="col-4 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">0 h</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="col-5 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#9b2020] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Supply fan</p>
      </div>
    </div>
  );
}

function HorizontalBorder4() {
  return (
    <div className="bg-[#f8f8f8] h-[44.12px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#e8e8e8] border-b-[0.625px] border-solid inset-0 pointer-events-none" />
      <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[_____minmax(0,1.60fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] grid-rows-[_17.50px] pb-[13.625px] pl-[8px] pt-[13px] relative size-full">
        <Container56 />
        <Container57 />
        <Container58 />
        <Container59 />
        <Container60 />
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">RTU-3 · Back Office</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="col-2 content-stretch flex gap-[7.99px] h-[17.5px] items-center justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="bg-[#1d7a5e] relative rounded-[99px] shrink-0 size-[8px]" data-name="Background" />
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Running</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Cool 1</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="col-4 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">4.1 h</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="col-5 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Good</p>
      </div>
    </div>
  );
}

function HorizontalBorder5() {
  return (
    <div className="h-[44.12px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#e8e8e8] border-b-[0.625px] border-solid inset-0 pointer-events-none" />
      <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[_____minmax(0,1.60fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] grid-rows-[_17.50px] pb-[13.625px] pl-[8px] pt-[13px] relative size-full">
        <Container61 />
        <Container62 />
        <Container63 />
        <Container64 />
        <Container65 />
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">RTU-4 · Stock Room</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="col-2 content-stretch flex gap-[7.99px] h-[17.5px] items-center justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="bg-[#aaa] relative rounded-[99px] shrink-0 size-[8px]" data-name="Background" />
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Idle</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Off</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="col-4 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">1.8 h</p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="col-5 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Filter due</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="bg-[#f8f8f8] h-[43.5px] relative shrink-0 w-full" data-name="Container">
      <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[_____minmax(0,1.60fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] grid-rows-[_17.50px] pl-[8px] py-[13px] relative size-full">
        <Container67 />
        <Container68 />
        <Container69 />
        <Container70 />
        <Container71 />
      </div>
    </div>
  );
}

function BackgroundBorder5() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[10.625px] pt-[8.625px] px-[22.625px] relative size-full">
        <Container43 />
        <HorizontalBorder2 />
        <HorizontalBorder3 />
        <HorizontalBorder4 />
        <HorizontalBorder5 />
        <Container66 />
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[0px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="text-[14px]">
          <span className="leading-[normal]">{`1,240 kWh · `}</span>
          <span className="[word-break:break-word] font-['Google_Sans_Flex:Medium','Noto_Sans_Symbols2:Regular',sans-serif] font-medium leading-[normal] not-italic text-[#985014]" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
            ▲ 11%
          </span>
          <span className="leading-[normal]">{` vs typical Tuesday`}</span>
        </p>
      </div>
    </div>
  );
}

function Margin5() {
  return (
    <div className="absolute content-stretch flex flex-col items-end min-w-[223.92999267578125px] pl-[297.783px] right-[-0.03px] top-[3.12px] w-[521.713px]" data-name="Margin">
      <Container73 />
    </div>
  );
}

function Container72() {
  return (
    <div className="h-[27.99px] relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Google_Sans_Flex:Bold',sans-serif] font-bold justify-center leading-[0] left-0 not-italic text-[#171a20] text-[16px] top-[10px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Energy today</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] left-[114.5px] not-italic text-[#808080] text-[14px] top-[11.12px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">kWh · hourly</p>
      </div>
      <Margin5 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[80%_1.05%_20%_1.32%]" data-name="Group">
      <div className="absolute inset-[80%_1.05%_20%_1.32%]" data-name="Vector">
        <div className="absolute inset-[-0.48px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 887.195 0.956257">
            <path d="M0 0.478129H887.195" id="Vector" stroke="var(--stroke-0, #E8E8E8)" strokeWidth="0.956257" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[46.67%_75.79%_20%_1.84%]" data-name="Group">
      <div className="absolute inset-[64%_95.52%_20%_1.84%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9138 22.9501">
          <path d={svgPaths.p942df00} fill="var(--fill-0, #D0D0D0)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[65.33%_91.58%_20%_5.79%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9138 21.0376">
          <path d={svgPaths.pf72b680} fill="var(--fill-0, #D0D0D0)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[62.67%_87.63%_20%_9.74%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9138 24.8626">
          <path d={svgPaths.p1965ad00} fill="var(--fill-0, #D0D0D0)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[60%_83.68%_20%_13.69%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9138 28.6876">
          <path d={svgPaths.p12537100} fill="var(--fill-0, #D0D0D0)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[56%_79.74%_20%_17.63%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9138 34.4251">
          <path d={svgPaths.p23fa1100} fill="var(--fill-0, #D0D0D0)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[46.67%_75.79%_20%_21.58%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9138 47.8127">
          <path d={svgPaths.p3b6000} fill="var(--fill-0, #D0D0D0)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[13.33%_40.26%_20%_25.53%]" data-name="Group">
      <div className="absolute inset-[34.67%_71.84%_20%_25.53%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9138 65.0252">
          <path d={svgPaths.p21b63400} fill="var(--fill-0, #456C88)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[29.33%_67.89%_20%_29.47%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9138 72.6753">
          <path d={svgPaths.p1a748a00} fill="var(--fill-0, #456C88)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[25.33%_63.95%_20%_33.42%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9138 78.4128">
          <path d={svgPaths.p32d8b400} fill="var(--fill-0, #456C88)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[22.67%_60%_20%_37.37%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9138 82.2378">
          <path d={svgPaths.p8699700} fill="var(--fill-0, #456C88)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[18.67%_56.05%_20%_41.32%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9138 87.9753">
          <path d={svgPaths.p1b194800} fill="var(--fill-0, #456C88)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[16%_52.11%_20%_45.26%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9138 91.8003">
          <path d={svgPaths.p7f1dd00} fill="var(--fill-0, #456C88)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[13.33%_48.16%_20%_49.21%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9138 95.6253">
          <path d={svgPaths.p23006300} fill="var(--fill-0, #456C88)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[14.67%_44.21%_20%_53.16%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9138 93.7128">
          <path d={svgPaths.p239fef00} fill="var(--fill-0, #456C88)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[17.33%_40.26%_20%_57.1%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9138 89.8878">
          <path d={svgPaths.pa37ee80} fill="var(--fill-0, #456C88)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[20%_4.74%_20%_61.05%]" data-name="Group">
      <div className="absolute inset-[20%_36.32%_20%_61.05%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9138 86.0628">
          <path d={svgPaths.p39ef1c0} fill="var(--fill-0, #E8E8E8)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[24%_32.37%_20%_65%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9138 80.3253">
          <path d={svgPaths.p11e2b200} fill="var(--fill-0, #E8E8E8)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[29.33%_28.42%_20%_68.95%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9138 72.6753">
          <path d={svgPaths.p1a748a00} fill="var(--fill-0, #E8E8E8)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[37.33%_24.47%_20%_72.89%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9138 61.2002">
          <path d={svgPaths.pcde8480} fill="var(--fill-0, #E8E8E8)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[46.67%_20.53%_20%_76.84%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9138 47.8127">
          <path d={svgPaths.p3b6000} fill="var(--fill-0, #E8E8E8)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[54.67%_16.58%_20%_80.79%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9138 36.3376">
          <path d={svgPaths.p3e407400} fill="var(--fill-0, #E8E8E8)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[61.33%_12.63%_20%_84.74%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9138 26.7751">
          <path d={svgPaths.p2ccf5500} fill="var(--fill-0, #E8E8E8)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[64%_8.69%_20%_88.68%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9138 22.9501">
          <path d={svgPaths.p942df00} fill="var(--fill-0, #E8E8E8)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[65.33%_4.74%_20%_92.63%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9138 21.0376">
          <path d={svgPaths.pf72b680} fill="var(--fill-0, #E8E8E8)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="[word-break:break-word] absolute contents font-['Google_Sans_Code:Regular',sans-serif] font-normal inset-[84.67%_4.76%_6.27%_1.84%] leading-[normal] text-[#808080] text-[10.519px]" data-name="Group">
      <p className="absolute inset-[84.67%_95.54%_6.27%_1.84%]">12a</p>
      <p className="absolute inset-[84.67%_72.68%_6.27%_25.53%]">6a</p>
      <p className="absolute inset-[84.67%_48.18%_6.27%_49.21%]">12p</p>
      <p className="absolute inset-[84.67%_25.32%_6.27%_72.89%]">6p</p>
      <p className="absolute inset-[84.67%_4.76%_6.27%_92.63%]">11p</p>
    </div>
  );
}

function Svg() {
  return (
    <div className="h-[143.439px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group />
      <Group2 />
      <Group3 />
      <Group4 />
      <Group5 />
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex gap-[6.99px] items-center relative self-stretch shrink-0" data-name="Container">
      <div className="bg-[#171a20] relative rounded-[2px] shrink-0 size-[10px]" data-name="Background" />
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Measured</p>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex gap-[6.99px] items-center relative self-stretch shrink-0" data-name="Container">
      <div className="bg-[#e8e8e8] relative rounded-[2px] shrink-0 size-[10px]" data-name="Background" />
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Forecast</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex gap-[18px] h-[18px] items-start relative shrink-0 w-full" data-name="Container">
      <Container75 />
      <Container76 />
    </div>
  );
}

function BackgroundBorder6() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[6px] items-start px-[24.625px] py-[22.625px] relative size-full">
        <Container72 />
        <Svg />
        <Container74 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-[696.87px] items-start min-w-px relative" data-name="Container">
      <Container24 />
      <BackgroundBorder5 />
      <BackgroundBorder6 />
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-0.002px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] capitalize flex flex-col font-['Google_Sans_Flex:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#201d1c] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Weather · Austin, TX</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative w-[18px]" data-name="Frame">
      <div className="absolute inset-[31.25%]" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.87425 7.87425">
            <path d={svgPaths.p2a94e800} id="Vector" stroke="var(--stroke-0, #AAAAAA)" strokeWidth="1.125" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[10.42%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.25 14.25">
          <path d={svgPaths.p39a4590} id="Vector" stroke="var(--stroke-0, #AAAAAA)" strokeWidth="1.125" />
        </svg>
      </div>
    </div>
  );
}

function Svg1() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center overflow-clip relative shrink-0 size-[18px]" data-name="SVG">
      <Frame />
    </div>
  );
}

function SvgMargin() {
  return (
    <div className="flex-[1_0_0] h-[18px] min-w-[18px] relative" data-name="SVG:margin">
      <div className="flex flex-col items-end min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end min-w-[inherit] pl-[113.262px] relative size-full">
          <Svg1 />
        </div>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Container79 />
      <SvgMargin />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Google_Sans_Flex:Regular',sans-serif] font-normal gap-[10.01px] items-baseline leading-[0] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="Paragraph">
      <div className="flex flex-col justify-center relative shrink-0 text-[34px] text-white" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[34px]">97°F</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#aaa] text-[14px]" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Clear · 31% RH · feels 101°</p>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[11.5px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">3 pm</p>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">99°</p>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex flex-col gap-[2.99px] items-center justify-center relative self-stretch shrink-0 w-[59.2px]" data-name="Container">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="WbSunny">
        <div className="absolute inset-[2.29%_4.17%_6.46%_4.17%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 21.9">
            <path d={svgPaths.p106fba00} fill="var(--fill-0, #F3B225)" id="Vector" />
          </svg>
        </div>
      </div>
      <Container81 />
      <Container82 />
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[11.5px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">5 pm</p>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">98°</p>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex flex-col gap-[2.99px] items-center justify-center relative self-stretch shrink-0 w-[59.21px]" data-name="Container">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="WbSunny">
        <div className="absolute inset-[2.29%_4.17%_6.46%_4.17%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 21.9">
            <path d={svgPaths.p106fba00} fill="var(--fill-0, #F3B225)" id="Vector" />
          </svg>
        </div>
      </div>
      <Container84 />
      <Container85 />
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[11.5px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">7 pm</p>
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">93°</p>
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch flex flex-col gap-[2.99px] items-center justify-center relative self-stretch shrink-0 w-[59.2px]" data-name="Container">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="WbSunny">
        <div className="absolute inset-[2.29%_4.17%_6.46%_4.17%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 21.9">
            <path d={svgPaths.p106fba00} fill="var(--fill-0, #F3B225)" id="Vector" />
          </svg>
        </div>
      </div>
      <Container87 />
      <Container88 />
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[11.5px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">9 pm</p>
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">88°</p>
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="content-stretch flex flex-col gap-[2.99px] items-center justify-center relative self-stretch shrink-0 w-[59.21px]" data-name="Container">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="WbSunny">
        <div className="absolute inset-[2.29%_4.17%_6.46%_4.17%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 21.9">
            <path d={svgPaths.p106fba00} fill="var(--fill-0, #F3B225)" id="Vector" />
          </svg>
        </div>
      </div>
      <Container90 />
      <Container91 />
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[11.5px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">H / L</p>
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">99° 78°</p>
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="content-stretch flex flex-col gap-[2.99px] items-center justify-center relative self-stretch shrink-0 w-[59.2px]" data-name="Container">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="WbSunny">
        <div className="absolute inset-[2.29%_4.17%_6.46%_4.17%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 21.9">
            <path d={svgPaths.p106fba00} fill="var(--fill-0, #F3B225)" id="Vector" />
          </svg>
        </div>
      </div>
      <Container93 />
      <Container94 />
    </div>
  );
}

function HorizontalBorder6() {
  return (
    <div className="content-stretch flex h-[78.605px] items-start justify-center pt-[16.625px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#2a2d33] border-solid border-t-[0.625px] inset-0 pointer-events-none" />
      <Container80 />
      <Container83 />
      <Container86 />
      <Container89 />
      <Container92 />
    </div>
  );
}

function Container95() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#aaa] text-[14px] w-full" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Peak demand window 2–6 pm · pre-cool active</p>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#171a20] relative rounded-[12px] shrink-0 w-full" data-name="Background">
      <div className="content-stretch flex flex-col gap-[12px] items-start px-[22px] py-[20px] relative size-full">
        <Container78 />
        <Paragraph1 />
        <HorizontalBorder6 />
        <Container95 />
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[6.99px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[16px] w-full" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">{`Today's schedule`}</p>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#e8e8e8] h-[10px] overflow-clip relative rounded-[99px] shrink-0 w-full" data-name="Background">
      <div className="absolute bg-[#171a20] inset-[0_13%_0_29%]" data-name="Background" />
    </div>
  );
}

function Container98() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[11.5px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">12a</p>
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[11.5px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">7a</p>
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[11.5px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">2p</p>
      </div>
    </div>
  );
}

function Container101() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[11.5px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">9p</p>
      </div>
    </div>
  );
}

function Container102() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[11.5px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">12a</p>
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-between pr-[0.01px] relative size-full">
          <Container98 />
          <Container99 />
          <Container100 />
          <Container101 />
          <Container102 />
        </div>
      </div>
    </div>
  );
}

function Container105() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[88px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[13.5px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Occupied</p>
      </div>
    </div>
  );
}

function Container104() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <Container105 />
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[13.5px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">7:00 am – 9:00 pm · 68–74°</p>
      </div>
    </div>
  );
}

function Container107() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[88px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[13.5px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Unoccupied</p>
      </div>
    </div>
  );
}

function Container106() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <Container107 />
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[13.5px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">9:00 pm – 7:00 am · 60–82°</p>
      </div>
    </div>
  );
}

function Container103() {
  return (
    <div className="content-stretch flex flex-col gap-[8.99px] items-start pt-[6.99px] relative shrink-0 w-full" data-name="Container">
      <Container104 />
      <Container106 />
    </div>
  );
}

function BackgroundBorder7() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[7px] items-start px-[22.625px] py-[20.625px] relative size-full">
        <Container96 />
        <Background3 />
        <Container97 />
        <Container103 />
      </div>
    </div>
  );
}

function Container108() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[16px] w-full" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Recent activity</p>
      </div>
    </div>
  );
}

function Container110() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[13.5px] w-full" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[18.9px]">RTU-2 fault detected · alert raised</p>
      </div>
    </div>
  );
}

function Container111() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[12px] w-full" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Today · 1:42 pm</p>
      </div>
    </div>
  );
}

function HorizontalBorder7() {
  return (
    <div className="content-stretch flex flex-col gap-[1.99px] items-start pb-[11.625px] pt-[11px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#e8e8e8] border-b-[0.625px] border-solid inset-0 pointer-events-none" />
      <Container110 />
      <Container111 />
    </div>
  );
}

function Container112() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[13.5px] w-full" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[18.9px]">Setpoint hold placed on Sales Floor (74°)</p>
      </div>
    </div>
  );
}

function Container113() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[12px] w-full" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Today · 11:05 am · M. Alvarez</p>
      </div>
    </div>
  );
}

function HorizontalBorder8() {
  return (
    <div className="content-stretch flex flex-col gap-[1.99px] items-start pb-[11.625px] pt-[11px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#e8e8e8] border-b-[0.625px] border-solid inset-0 pointer-events-none" />
      <Container112 />
      <Container113 />
    </div>
  );
}

function Container115() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[13.5px] w-full" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[18.9px]">Pre-cool started ahead of peak window</p>
      </div>
    </div>
  );
}

function Container116() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[12px] w-full" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Today · 10:00 am · Automated</p>
      </div>
    </div>
  );
}

function Container114() {
  return (
    <div className="content-stretch flex flex-col gap-[1.99px] items-start py-[11px] relative shrink-0 w-full" data-name="Container">
      <Container115 />
      <Container116 />
    </div>
  );
}

function Container109() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <HorizontalBorder7 />
      <HorizontalBorder8 />
      <Container114 />
    </div>
  );
}

function BackgroundBorder8() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[6px] items-start px-[22.625px] py-[20.625px] relative size-full">
        <Container108 />
        <Container109 />
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[696.87px] items-start relative shrink-0 w-[340px]" data-name="Container">
      <Background2 />
      <BackgroundBorder7 />
      <BackgroundBorder8 />
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-[#f4f4f4] flex-[1_0_0] min-h-px relative w-full" data-name="Container">
      <div className="content-stretch flex gap-[15.99px] items-start px-[28px] py-[24px] relative size-full">
        <Container23 />
        <Container77 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[0.01px] items-start min-w-px relative self-stretch" data-name="Container">
      <BackgroundHorizontalBorder />
      <BackgroundHorizontalBorder1 />
      <Container22 />
    </div>
  );
}

function Page() {
  return (
    <div className="content-stretch flex items-start relative rounded-[64px] shrink-0 w-full" data-name="Page">
      <button className="bg-[#171a20] content-stretch cursor-pointer flex flex-col h-[960px] items-start relative shrink-0 w-[58px]" data-name="Sidenav">
        <IconButton />
        <IconButton1 />
        <Ul />
      </button>
      <Container10 />
    </div>
  );
}

export default function Assets() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col items-start relative size-full" data-name="Assets">
      <Header />
      <Page />
    </div>
  );
}