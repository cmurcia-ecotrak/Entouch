import svgPaths from "./svg-obuzlmg63p";

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

function Frame() {
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

function Frame1() {
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
      <Frame />
      <LeftSide />
      <Frame1 />
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

function Container13() {
  return (
    <div className="content-stretch flex gap-[10px] h-[39.25px] items-start relative shrink-0" data-name="Container">
      <BackgroundBorder />
      <Background1 />
    </div>
  );
}

function Margin() {
  return (
    <div className="flex-[1_0_0] min-w-[270.2900085449219px] relative" data-name="Margin">
      <div className="flex flex-col items-end min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end min-w-[inherit] pl-[540.83px] relative size-full">
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[14px] items-center pt-[6px] relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Border />
      <Margin />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[13.5px] w-full" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">2201 S Lamar Blvd, Austin, TX · 12,400 sq ft · Retail</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="relative self-stretch shrink-0 w-[100px]" data-name="Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pb-[11px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[14px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
            <p className="leading-[normal]">Overview</p>
          </div>
        </div>
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
            <p className="leading-[normal]">Controllers</p>
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
            <p className="leading-[normal]">Equipment</p>
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
            <p className="leading-[normal]">Schedules</p>
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
            <p className="leading-[normal]">Alerts</p>
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
            <p className="leading-[normal]">History</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[26px] h-[42.865px] items-start pt-[11.99px] relative shrink-0 w-full" data-name="Container">
      <Container16 />
      <HorizontalBorder1 />
      <Container17 />
      <Container18 />
      <Container19 />
      <Container20 />
    </div>
  );
}

function BackgroundHorizontalBorder() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Background+HorizontalBorder">
      <div aria-hidden className="absolute border-[#e8e8e8] border-b-[0.625px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-[0.625px] pt-[18px] px-[28px] relative size-full">
        <Paragraph />
        <Container11 />
        <Container14 />
        <Container15 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pb-[8px] pt-[10px] px-[12px] relative size-full">
        <div className="[word-break:break-word] capitalize flex flex-col font-['Google_Sans_Flex:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#201d1c] text-[16px] w-full" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
          <p className="leading-[normal]">Zones</p>
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[14px] w-full" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Sales Floor</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[12px] w-full" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">RTU-1 · RTU-2</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[0.99px] items-start min-w-px relative" data-name="Container">
      <Container25 />
      <Container26 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[17px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">78.4°</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <Container24 />
      <Container27 />
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#c7d6df] content-stretch flex items-center px-[14px] py-[6px] relative rounded-[99px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[12.5px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Hold active · Sales Floor</p>
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-[rgba(97,137,159,0.1)] relative rounded-[8px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start justify-center p-[12.625px] relative size-full">
          <Frame3 />
          <Background2 />
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] w-full" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Back Office</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[12px] w-full" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">RTU-3</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[0.99px] items-start min-w-px relative" data-name="Container">
      <Container30 />
      <Container31 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[17px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">72.2°</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center p-[12px] relative size-full">
          <Container29 />
          <Container32 />
        </div>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] w-full" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Stock Room</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[12px] w-full" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">RTU-4</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-px items-start min-w-px relative" data-name="Container">
      <Container35 />
      <Container36 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[17px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">69.8°</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center p-[12px] relative size-full">
          <Container34 />
          <Container37 />
        </div>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] w-full" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Vestibule</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[12px] w-full" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Split-1</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[0.99px] items-start min-w-px relative" data-name="Container">
      <Container40 />
      <Container41 />
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[17px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">74.6°</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center p-[12px] relative size-full">
          <Container39 />
          <Container42 />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[4px] items-start p-[10.625px] relative rounded-[12px] shrink-0 w-[280px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container23 />
      <BackgroundBorder2 />
      <Container28 />
      <Container33 />
      <Container38 />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[3.99px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[16px] w-full" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Runtime · last 7 days</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[80%_1.43%_20%_1.43%]" data-name="Group">
      <div className="absolute inset-[80%_1.43%_20%_1.43%]" data-name="Vector">
        <div className="absolute inset-[-0.53px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 228.043 1.05275">
            <path d="M0 0.526375H228.043" id="Vector" stroke="var(--stroke-0, #E8E8E8)" strokeWidth="1.05275" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[16.36%_20%_20%_3.57%]" data-name="Group">
      <div className="absolute inset-[38.18%_87.86%_20%_3.57%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1212 48.4258">
          <path d={svgPaths.p3768c880} fill="var(--fill-0, #171A20)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[32.73%_74.29%_20%_17.14%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1212 54.7423">
          <path d={svgPaths.p119cee80} fill="var(--fill-0, #171A20)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[43.64%_60.71%_20%_30.71%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1212 42.1094">
          <path d={svgPaths.p9cb8d00} fill="var(--fill-0, #171A20)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[27.27%_47.14%_20%_44.29%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1212 61.0587">
          <path d={svgPaths.p1cded080} fill="var(--fill-0, #171A20)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[21.82%_33.57%_20%_57.86%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1212 67.3751">
          <path d={svgPaths.p25878c80} fill="var(--fill-0, #171A20)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[16.36%_20%_20%_71.43%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1212 73.6915">
          <path d={svgPaths.p10441f00} fill="var(--fill-0, #171A20)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[30.91%_6.43%_20%_85%]" data-name="Group">
      <div className="absolute inset-[30.91%_6.43%_20%_85%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1212 56.8477">
          <path d={svgPaths.p3d232bc0} fill="var(--fill-0, #D0D0D0)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="[word-break:break-word] absolute contents font-['Google_Sans_Code:Regular',sans-serif] font-normal inset-[84.09%_4.14%_-8.27%_4.29%] leading-[normal] text-[#808080] text-[11.054px]" data-name="Group">
      <p className="absolute inset-[84.09%_87.57%_-8.27%_4.29%]">Wed</p>
      <p className="absolute inset-[84.09%_75.02%_-8.27%_17.86%]">Thu</p>
      <p className="absolute inset-[84.09%_61.43%_-8.27%_31.79%]">Fri</p>
      <p className="absolute inset-[84.09%_48.89%_-8.27%_45%]">Sat</p>
      <p className="absolute inset-[84.09%_34.64%_-8.27%_58.57%]">Sun</p>
      <p className="absolute inset-[84.09%_20.77%_-8.27%_71.43%]">Mon</p>
      <p className="absolute inset-[84.09%_4.14%_-8.27%_85%]">Today</p>
    </div>
  );
}

function Svg() {
  return (
    <div className="h-[115.803px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group />
      <Group2 />
      <Group3 />
      <Group4 />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[14px] w-full" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal] mb-0">Cooling runtime trending up with outdoor highs;</p>
        <p className="leading-[normal]">RTU-2 offline shifts load to RTU-1.</p>
      </div>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[22.625px] py-[20.625px] relative size-full">
        <Container43 />
        <Svg />
        <Container44 />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0">
      <BackgroundBorder1 />
      <BackgroundBorder3 />
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Sales Floor</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Hold until 9:00 pm · then resume schedule</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[1.99px] items-start left-0 top-0 w-[282px]" data-name="Container">
      <Container47 />
      <Container48 />
    </div>
  );
}

function Border1() {
  return (
    <div className="bg-[rgba(50,193,117,0.1)] content-stretch flex gap-[6.99px] items-center px-[12.625px] py-[5.625px] relative rounded-[99px] shrink-0" data-name="Border">
      <div className="bg-[#1d7a5e] relative rounded-[99px] shrink-0 size-[6.99px]" data-name="Background" />
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#467855] text-[12.5px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Cooling · Stage 2</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="absolute content-stretch flex flex-col items-end min-w-[143.49000549316406px] pl-[29.57px] right-[-0.09px] top-[0.57px] w-[173.06px]" data-name="Margin">
      <Border1 />
    </div>
  );
}

function Container45() {
  return (
    <div className="col-1 h-[40.74px] justify-self-stretch relative row-1 shrink-0" data-name="Container">
      <Container46 />
      <Margin1 />
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[12px] tracking-[1.92px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Inside</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[58px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[60.9px]">78.4°</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[13.5px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p>
          <span className="leading-[normal]">{`Cooling to `}</span>
          <span className="[word-break:break-word] font-['Google_Sans_Flex:Medium',sans-serif] font-medium leading-[normal] not-italic text-[#171a20]" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
            74°
          </span>
        </p>
      </div>
    </div>
  );
}

function BackgroundBorder5() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col inset-[33.99px_34px_34px_33.99px] items-center justify-center p-[0.625px] rounded-[99px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[99px]" />
      <Container50 />
      <Container51 />
      <Container52 />
    </div>
  );
}

function Container49() {
  return (
    <div className="relative shrink-0 size-[280px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 280 280">
        <g clipPath="url(#clip0_5_5523)" id="SVG">
          <path d={svgPaths.p26d61200} id="Vector" stroke="var(--stroke-0, #E8E8E8)" strokeLinecap="round" strokeWidth="10" />
          <path d={svgPaths.pd907d00} id="Vector_2" stroke="var(--stroke-0, #456C88)" strokeLinecap="round" strokeWidth="10" />
          <path d={svgPaths.p2845c600} fill="var(--fill-0, white)" id="Vector_3" stroke="var(--stroke-0, #171A20)" strokeWidth="3" />
        </g>
        <defs>
          <clipPath id="clip0_5_5523">
            <rect fill="white" height="280" width="280" />
          </clipPath>
        </defs>
      </svg>
      <BackgroundBorder5 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col h-[280px] items-center justify-center relative shrink-0 w-full" data-name="Margin">
      <Container49 />
    </div>
  );
}

function Border3() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[0.625px] relative rounded-[99px] shrink-0 size-[37.25px]" data-name="Border">
      <div aria-hidden className="absolute border border-[#d0d0d0] border-solid inset-0 pointer-events-none rounded-[99px]" />
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[19px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">−</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#201d1c] text-[11px] text-center tracking-[1.54px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Cool to</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2f6792] text-[21px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">74°</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[73.98999786376953px] relative shrink-0 w-[73.99px]" data-name="Container">
      <Container55 />
      <Container56 />
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#456c88] content-stretch flex items-center justify-center relative rounded-[99px] shrink-0 size-[36px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[19px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">+</p>
      </div>
    </div>
  );
}

function Border2() {
  return (
    <div className="relative rounded-[99px] self-stretch shrink-0" data-name="Border">
      <div aria-hidden className="absolute border border-[#d0d0d0] border-solid inset-0 pointer-events-none rounded-[99px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[14px] items-center px-[10.625px] py-[8.625px] relative size-full">
          <Border3 />
          <Container54 />
          <Background3 />
        </div>
      </div>
    </div>
  );
}

function Border5() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[0.625px] relative rounded-[99px] shrink-0 size-[37.25px]" data-name="Border">
      <div aria-hidden className="absolute border border-[#d0d0d0] border-solid inset-0 pointer-events-none rounded-[99px]" />
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[19px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">−</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#201d1c] text-[11px] text-center tracking-[1.54px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Heat to</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#a8353f] text-[21px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">68°</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[73.98999786376953px] relative shrink-0 w-[73.99px]" data-name="Container">
      <Container58 />
      <Container59 />
    </div>
  );
}

function Border6() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[0.625px] relative rounded-[99px] shrink-0 size-[37.25px]" data-name="Border">
      <div aria-hidden className="absolute border border-[#d0d0d0] border-solid inset-0 pointer-events-none rounded-[99px]" />
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[19px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">+</p>
      </div>
    </div>
  );
}

function Border4() {
  return (
    <div className="relative rounded-[99px] self-stretch shrink-0" data-name="Border">
      <div aria-hidden className="absolute border border-[#d0d0d0] border-solid inset-0 pointer-events-none rounded-[99px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[14px] items-center px-[10.625px] py-[8.625px] relative size-full">
          <Border5 />
          <Container57 />
          <Border6 />
        </div>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex gap-[14px] h-[57.25px] items-start relative shrink-0" data-name="Container">
      <Border2 />
      <Border4 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col h-[57.25px] items-center justify-center relative shrink-0 w-full" data-name="Margin">
      <Container53 />
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#456c88] relative self-stretch shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col items-start px-[18px] py-[9px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13.5px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
          <p className="leading-[normal]">Auto</p>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder() {
  return (
    <div className="bg-[rgba(76,143,195,0.1)] relative self-stretch shrink-0" data-name="VerticalBorder">
      <div aria-hidden className="absolute border-[#d0d0d0] border-l-[0.625px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[9px] relative size-full">
          <div className="content-stretch flex items-start relative shrink-0" data-name="Icon">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="AcUnit">
              <div className="absolute inset-[8.33%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
                  <path d={svgPaths.p3834fb00} fill="var(--fill-0, #2F6792)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2f6792] text-[13.5px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
            <p className="leading-[normal]">Cool</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder1() {
  return (
    <div className="bg-[rgba(231,74,79,0.1)] relative self-stretch shrink-0" data-name="VerticalBorder">
      <div aria-hidden className="absolute border-[#d0d0d0] border-l-[0.625px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[9px] relative size-full">
          <div className="content-stretch flex items-start relative shrink-0" data-name="Icon">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="LocalFireDepartment">
              <div className="absolute inset-[6.23%_16.68%_8.33%_16.67%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3303 17.0874">
                  <path d={svgPaths.p390bc700} fill="var(--fill-0, #A8353F)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#a8353f] text-[13.5px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
            <p className="leading-[normal]">Heat</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder2() {
  return (
    <div className="relative self-stretch shrink-0" data-name="VerticalBorder">
      <div aria-hidden className="absolute border-[#d0d0d0] border-l-[0.625px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pl-[18.625px] pr-[18px] py-[9px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[13.5px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
          <p className="leading-[normal]">Off</p>
        </div>
      </div>
    </div>
  );
}

function Border7() {
  return (
    <div className="h-[39.25px] relative rounded-[8px] shrink-0" data-name="Border">
      <div className="content-stretch flex items-start overflow-clip p-[0.625px] relative rounded-[inherit] size-full">
        <Background4 />
        <VerticalBorder />
        <VerticalBorder1 />
        <VerticalBorder2 />
      </div>
      <div aria-hidden className="absolute border border-[#d0d0d0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#456c88] relative self-stretch shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col items-start px-[16px] py-[9px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13.5px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
          <p className="leading-[normal]">Auto</p>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder3() {
  return (
    <div className="relative self-stretch shrink-0" data-name="VerticalBorder">
      <div aria-hidden className="absolute border-[#d0d0d0] border-l-[0.625px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[9px] relative size-full">
          <div className="content-stretch flex items-start relative shrink-0" data-name="Icon">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Air">
              <div className="absolute inset-[12.5%_8.33%_16.67%_8.33%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 14.1667">
                  <path d={svgPaths.p21f72400} fill="var(--fill-0, #201D1C)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#201d1c] text-[13.5px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
            <p className="leading-[normal]">On</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder4() {
  return (
    <div className="relative self-stretch shrink-0" data-name="VerticalBorder">
      <div aria-hidden className="absolute border-[#d0d0d0] border-l-[0.625px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[9px] relative size-full">
          <div className="content-stretch flex items-start relative shrink-0" data-name="Icon">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="PowerSettingsNew">
              <div className="absolute inset-[12.5%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                  <path d={svgPaths.p21b2dd00} fill="var(--fill-0, #201D1C)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#201d1c] text-[13.5px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
            <p className="leading-[normal]">Off</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Border8() {
  return (
    <div className="h-[39.25px] relative rounded-[8px] shrink-0" data-name="Border">
      <div className="content-stretch flex items-start overflow-clip p-[0.625px] relative rounded-[inherit] size-full">
        <Background5 />
        <VerticalBorder3 />
        <VerticalBorder4 />
      </div>
      <div aria-hidden className="absolute border border-[#d0d0d0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col gap-[10.01px] items-start justify-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[13.5px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Fan</p>
      </div>
      <Border8 />
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex gap-[23.99px] items-end relative shrink-0" data-name="Container">
      <Border7 />
      <Container61 />
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col h-[66.26px] items-start justify-end relative shrink-0 w-full" data-name="Margin">
      <Container60 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[8px] items-start relative row-2 self-start shrink-0 w-[592px]">
      <Margin2 />
      <Margin3 />
      <Margin4 />
    </div>
  );
}

function Margin5() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-3 self-stretch shrink-0" data-name="Margin">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Changes apply to RTU-1 and RTU-2 · logged to site history</p>
      </div>
    </div>
  );
}

function BackgroundBorder4() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[20px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="gap-y-[24px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[repeat(3,fit-content(100%))] px-[35px] py-[24px] relative size-full">
        <Container45 />
        <Frame4 />
        <Margin5 />
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-0.007px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Schedule</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium','Noto_Sans_Symbols:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Edit →</p>
      </div>
    </div>
  );
}

function Margin6() {
  return (
    <div className="flex-[1_0_0] min-w-[40.290000915527344px] relative" data-name="Margin">
      <div className="flex flex-col items-end min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end min-w-[inherit] pl-[184.307px] relative size-full">
          <Container65 />
        </div>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Container64 />
      <Margin6 />
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[51.99px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">7:00a</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-0.01px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[13.5px] w-full" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Occupied</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[14px] w-full" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Cool 74° · Heat 68°</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Container69 />
      <Container70 />
    </div>
  );
}

function BackgroundBorder7() {
  return (
    <div className="bg-[#e8e8e8] content-stretch flex flex-col items-start px-[10.625px] py-[4.625px] relative rounded-[99px] shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[99px]" />
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[11.5px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Active</p>
      </div>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center pb-[12.625px] pt-[12px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#e8e8e8] border-b-[0.625px] border-solid inset-0 pointer-events-none" />
      <Container67 />
      <Container68 />
      <BackgroundBorder7 />
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[51.99px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">9:00p</p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-0.01px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[13.5px] w-full" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Unoccupied</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[14px] w-full" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Cool 82° · Heat 60°</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Container73 />
      <Container74 />
    </div>
  );
}

function HorizontalBorder3() {
  return (
    <div className="content-stretch flex gap-[11.99px] items-center pb-[12.625px] pt-[12px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#e8e8e8] border-b-[0.625px] border-solid inset-0 pointer-events-none" />
      <Container71 />
      <Container72 />
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[51.99px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">2:00p</p>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-0.01px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[13.5px] w-full" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Peak guard</p>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[14px] w-full" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Demand limit · 2–6 pm daily</p>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Container78 />
      <Container79 />
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#c7d6df] content-stretch flex flex-col items-start px-[10px] py-[4px] relative rounded-[99px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2e2c28] text-[11.5px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Auto</p>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex gap-[12px] items-center py-[12px] relative shrink-0 w-full" data-name="Container">
      <Container76 />
      <Container77 />
      <Background6 />
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[51.99px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">7:00a</p>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-0.01px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[13.5px] w-full" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Occupied</p>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[14px] w-full" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Cool 74° · Heat 68°</p>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Container82 />
      <Container83 />
    </div>
  );
}

function BackgroundBorder8() {
  return (
    <div className="bg-[#e8e8e8] content-stretch flex flex-col items-start px-[10.625px] py-[4.625px] relative rounded-[99px] shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[99px]" />
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[11.5px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Active</p>
      </div>
    </div>
  );
}

function HorizontalBorder4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center pb-[12.625px] pt-[12px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#e8e8e8] border-b-[0.625px] border-solid inset-0 pointer-events-none" />
      <Container80 />
      <Container81 />
      <BackgroundBorder8 />
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[51.99px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">9:00p</p>
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-0.01px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[13.5px] w-full" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Unoccupied</p>
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[14px] w-full" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Cool 82° · Heat 60°</p>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Container86 />
      <Container87 />
    </div>
  );
}

function HorizontalBorder5() {
  return (
    <div className="content-stretch flex gap-[11.99px] items-center pb-[12.625px] pt-[12px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#e8e8e8] border-b-[0.625px] border-solid inset-0 pointer-events-none" />
      <Container84 />
      <Container85 />
    </div>
  );
}

function Container89() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[51.99px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">2:00p</p>
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-0.01px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[13.5px] w-full" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Peak guard</p>
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[14px] w-full" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Demand limit · 2–6 pm daily</p>
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Container91 />
      <Container92 />
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-[#c7d6df] content-stretch flex flex-col items-start px-[10px] py-[4px] relative rounded-[99px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2e2c28] text-[11.5px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Auto</p>
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex gap-[12px] items-center py-[12px] relative shrink-0 w-full" data-name="Container">
      <Container89 />
      <Container90 />
      <Background7 />
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <HorizontalBorder2 />
      <HorizontalBorder3 />
      <Container75 />
      <HorizontalBorder4 />
      <HorizontalBorder5 />
      <Container88 />
    </div>
  );
}

function BackgroundBorder6() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[22.625px] py-[20.625px] relative size-full">
        <Container63 />
        <Container66 />
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col h-[584.96px] items-start relative shrink-0 w-[340px]" data-name="Container">
      <BackgroundBorder6 />
    </div>
  );
}

function Container22() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container">
      <div className="content-stretch flex gap-[16px] items-start px-[28px] py-[24px] relative size-full">
        <Frame2 />
        <BackgroundBorder4 />
        <Container62 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="Container">
      <Container22 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[0.01px] items-start min-w-px relative self-stretch" data-name="Container">
      <BackgroundHorizontalBorder />
      <Container21 />
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