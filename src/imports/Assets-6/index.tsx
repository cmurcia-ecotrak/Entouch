import svgPaths from "./svg-n92s1jed4d";

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
      <p className="[word-break:break-word] font-['American_Grotesk:Bold',sans-serif] leading-[1.334] not-italic relative shrink-0 text-[#fffffc] text-[24px] whitespace-nowrap">Analytics</p>
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

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[18px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Analytics</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[16px] py-[8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
          <p className="leading-[normal]">30 days</p>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder() {
  return (
    <div className="relative self-stretch shrink-0" data-name="VerticalBorder">
      <div aria-hidden className="absolute border-[#d0d0d0] border-l-[0.625px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pl-[16.625px] pr-[16px] py-[8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
          <p className="leading-[normal]">90 days</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundVerticalBorder() {
  return (
    <div className="bg-[#456c88] relative self-stretch shrink-0" data-name="Background+VerticalBorder">
      <div aria-hidden className="absolute border-[#d0d0d0] border-l-[0.625px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pl-[16.625px] pr-[16px] py-[8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
          <p className="leading-[normal]">12 months</p>
        </div>
      </div>
    </div>
  );
}

function Border() {
  return (
    <div className="h-[35.25px] relative rounded-[8px] shrink-0" data-name="Border">
      <div className="content-stretch flex items-start overflow-clip p-[0.625px] relative rounded-[inherit] size-full">
        <Container12 />
        <VerticalBorder />
        <BackgroundVerticalBorder />
      </div>
      <div aria-hidden className="absolute border border-[#d0d0d0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[12px] relative shrink-0" data-name="Margin">
      <Border />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Code:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#808080] text-[13.5px] whitespace-nowrap">
        <p className="leading-[normal]">▾</p>
      </div>
    </div>
  );
}

function Border1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[12.625px] py-[8.625px] relative rounded-[6px] shrink-0" data-name="Border">
      <div aria-hidden className="absolute border border-[#d0d0d0] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[13.5px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">All sites</p>
      </div>
      <Container13 />
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[13.99px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.99 13.99">
        <g id="SVG">
          <path d={svgPaths.p1fcaae80} id="Vector" stroke="var(--stroke-0, #171A20)" strokeWidth="0.874375" />
          <path d="M2.33167 12.2413H11.6583" id="Vector_2" stroke="var(--stroke-0, #171A20)" strokeWidth="0.874375" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center px-[18.625px] py-[10.625px] relative rounded-[8px] shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#d0d0d0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Svg />
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Export report</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="flex-[1_0_0] min-w-[151.3000030517578px] relative" data-name="Margin">
      <div className="flex flex-col items-end min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end min-w-[inherit] pl-[498.193px] relative size-full">
          <BackgroundBorder />
        </div>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder() {
  return (
    <div className="bg-white h-[64.62px] relative shrink-0 w-full" data-name="Background+HorizontalBorder">
      <div aria-hidden className="absolute border-[#e8e8e8] border-b-[0.625px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[14px] items-center pb-[0.625px] px-[28px] relative size-full">
          <Container11 />
          <Margin />
          <Border1 />
          <Margin1 />
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex gap-[6.99px] items-center relative self-stretch shrink-0" data-name="Container">
      <div className="bg-[#171a20] relative rounded-[2px] shrink-0 size-[10px]" data-name="Background" />
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">2026</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex gap-[6.99px] items-center relative self-stretch shrink-0" data-name="Container">
      <div className="bg-[#d0d0d0] relative rounded-[2px] shrink-0 size-[10px]" data-name="Background" />
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">2025</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex gap-[15.99px] h-[18px] items-start relative shrink-0" data-name="Container">
      <Container17 />
      <Container18 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="absolute content-stretch flex flex-col items-end min-w-[109.33999633789062px] pl-[669.238px] right-[-0.04px] top-[2.82px] w-[778.578px]" data-name="Margin">
      <Container16 />
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Google_Sans_Flex:Bold',sans-serif] font-bold justify-center leading-[0] left-0 not-italic text-[#171a20] text-[16px] top-[10px] w-[251.162px]" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Portfolio consumption · monthly</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] left-[257.77px] not-italic text-[#808080] text-[14px] top-[11.13px] w-[33.185px]" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">MWh</p>
      </div>
      <Margin2 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[11.54%_0.93%_13.46%_2.78%]" data-name="Group">
      <div className="absolute inset-[11.54%_0.93%_88.46%_2.78%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1217.88 1.00255">
            <path d="M0 0.501277H1217.88" id="Vector" stroke="var(--stroke-0, #E8E8E8)" strokeWidth="1.00255" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[36.54%_0.93%_63.46%_2.78%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1217.88 1.00255">
            <path d="M0 0.501277H1217.88" id="Vector" stroke="var(--stroke-0, #E8E8E8)" strokeWidth="1.00255" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[61.54%_0.93%_38.46%_2.78%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1217.88 1.00255">
            <path d="M0 0.501277H1217.88" id="Vector" stroke="var(--stroke-0, #E8E8E8)" strokeWidth="1.00255" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[86.54%_0.93%_13.46%_2.78%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1217.88 1.00255">
            <path d="M0 0.501277H1217.88" id="Vector" stroke="var(--stroke-0, #E8E8E8)" strokeWidth="1.00255" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="[word-break:break-word] absolute contents font-['Google_Sans_Code:Regular',sans-serif] font-normal inset-[8.85%_98.15%_10.78%_0] leading-[normal] text-[#808080] text-[11.028px]" data-name="Group">
      <p className="absolute inset-[8.85%_98.15%_85.78%_0]">1.8</p>
      <p className="absolute inset-[33.85%_98.15%_60.78%_0]">1.2</p>
      <p className="absolute inset-[58.85%_98.15%_35.78%_0]">0.6</p>
      <p className="absolute inset-[83.85%_99.35%_10.78%_0]">0</p>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[17.69%_2.78%_13.46%_4.45%]" data-name="Group">
      <div className="absolute inset-[43.08%_93.15%_13.46%_4.45%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.4473 113.289">
          <path d={svgPaths.p3b619e80} fill="var(--fill-0, #D0D0D0)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[46.92%_90.37%_13.46%_7.22%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.4473 103.263">
          <path d={svgPaths.p3cc41e00} fill="var(--fill-0, #456C88)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[45.38%_85.18%_13.46%_12.41%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.4473 107.273">
          <path d={svgPaths.p20ef42c0} fill="var(--fill-0, #D0D0D0)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[49.23%_82.41%_13.46%_15.19%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.4473 97.2477">
          <path d={svgPaths.p3ece0600} fill="var(--fill-0, #456C88)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[41.54%_77.22%_13.46%_20.37%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.4473 117.299">
          <path d={svgPaths.p3646ffb2} fill="var(--fill-0, #D0D0D0)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[46.15%_74.44%_13.46%_23.15%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.4473 105.268">
          <path d={svgPaths.pcf91b00} fill="var(--fill-0, #456C88)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[36.92%_69.26%_13.46%_28.33%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.4473 129.329">
          <path d={svgPaths.p33dadfe0} fill="var(--fill-0, #D0D0D0)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[41.54%_66.48%_13.46%_31.11%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.4473 117.299">
          <path d={svgPaths.p3646ffb2} fill="var(--fill-0, #456C88)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[30%_61.3%_13.46%_36.3%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.4473 147.375">
          <path d={svgPaths.p2092a400} fill="var(--fill-0, #D0D0D0)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[35.38%_58.52%_13.46%_39.07%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.4473 133.34">
          <path d={svgPaths.p31a13700} fill="var(--fill-0, #456C88)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[22.31%_53.33%_13.46%_44.26%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.4473 167.426">
          <path d={svgPaths.p350e1300} fill="var(--fill-0, #D0D0D0)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[28.46%_50.56%_13.46%_47.04%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.4473 151.386">
          <path d={svgPaths.p33853680} fill="var(--fill-0, #456C88)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[17.69%_45.37%_13.46%_52.22%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.4473 179.457">
          <path d={svgPaths.p37125440} fill="var(--fill-0, #D0D0D0)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[23.85%_42.59%_13.46%_55%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.4473 163.416">
          <path d={svgPaths.p70ec00} fill="var(--fill-0, #456C88)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[19.23%_37.41%_13.46%_60.18%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.4473 175.447">
          <path d={svgPaths.p7dc2c70} fill="var(--fill-0, #D0D0D0)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[25.38%_34.63%_13.46%_62.96%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.4473 159.406">
          <path d={svgPaths.p1441c5e0} fill="var(--fill-0, #456C88)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[25.38%_29.44%_13.46%_68.15%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.4473 159.406">
          <path d={svgPaths.p1441c5e0} fill="var(--fill-0, #D0D0D0)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[30.77%_26.67%_13.46%_70.93%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.4473 145.37">
          <path d={svgPaths.p37fe21f0} fill="var(--fill-0, #456C88)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[34.62%_21.48%_13.46%_76.11%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.4473 135.345">
          <path d={svgPaths.p2ddd1000} fill="var(--fill-0, #D0D0D0)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[39.23%_18.7%_13.46%_78.89%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.4473 123.314">
          <path d={svgPaths.p87e4880} fill="var(--fill-0, #456C88)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[41.54%_13.52%_13.46%_84.07%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.4473 117.299">
          <path d={svgPaths.p3646ffb2} fill="var(--fill-0, #D0D0D0)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[45.38%_10.74%_13.46%_86.85%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.4473 107.273">
          <path d={svgPaths.p20ef42c0} fill="var(--fill-0, #456C88)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[44.62%_5.56%_13.46%_92.04%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.4473 109.278">
          <path d={svgPaths.p4905b00} fill="var(--fill-0, #D0D0D0)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[47.69%_2.78%_13.46%_94.81%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.4473 101.258">
          <path d={svgPaths.p1ad2c00} fill="var(--fill-0, #456C88)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="[word-break:break-word] absolute contents font-['Google_Sans_Code:Regular',sans-serif] font-normal inset-[90%_4.82%_4.63%_5.74%] leading-[normal] text-[#808080] text-[11.028px]" data-name="Group">
      <p className="absolute inset-[90%_92.41%_4.63%_5.74%]">Aug</p>
      <p className="absolute inset-[90%_84.45%_4.63%_13.7%]">Sep</p>
      <p className="absolute inset-[90%_76.49%_4.63%_21.67%]">Oct</p>
      <p className="absolute inset-[90%_68.52%_4.63%_29.63%]">Nov</p>
      <p className="absolute inset-[90%_60.56%_4.63%_37.59%]">Dec</p>
      <p className="absolute inset-[90%_52.6%_4.63%_45.56%]">Jan</p>
      <p className="absolute inset-[90%_44.63%_4.63%_53.52%]">Feb</p>
      <p className="absolute inset-[90%_36.67%_4.63%_61.48%]">Mar</p>
      <p className="absolute inset-[90%_28.71%_4.63%_69.44%]">Apr</p>
      <p className="absolute inset-[90%_20.75%_4.63%_77.41%]">May</p>
      <p className="absolute inset-[90%_12.78%_4.63%_85.37%]">Jun</p>
      <p className="absolute inset-[90%_4.82%_4.63%_93.33%]">Jul</p>
    </div>
  );
}

function Svg1() {
  return (
    <div className="h-[260.664px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group />
      <Group2 />
      <Group3 />
      <Group4 />
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[24.625px] py-[22.625px] relative size-full">
        <Container15 />
        <Svg1 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[16px] w-full" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Use by system · 12 mo</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex h-[13.99px] items-start overflow-clip pt-[2px] relative rounded-[99px] shrink-0 w-full" data-name="Container">
      <div className="bg-[#171a20] h-full relative shrink-0 w-[229.86px]" data-name="Background" />
      <div className="bg-[#808080] h-full relative shrink-0 w-[77.85px]" data-name="Background" />
      <div className="bg-[#aaa] h-full relative shrink-0 w-[40.78px]" data-name="Background" />
      <div className="bg-[#d0d0d0] h-full relative shrink-0 w-[22.24px]" data-name="Background" />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">HVAC</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">62% · 10.6 GWh</p>
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="flex-[1_0_0] min-w-[101.12999725341797px] relative" data-name="Margin">
      <div className="flex flex-col items-end min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end min-w-[inherit] pl-[200.84px] relative size-full">
          <Container24 />
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center pb-[10.625px] pt-[10px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#e8e8e8] border-b-[0.625px] border-solid inset-0 pointer-events-none" />
      <div className="bg-[#171a20] relative rounded-[2px] shrink-0 size-[10px]" data-name="Background" />
      <Container23 />
      <Margin3 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Lighting</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">21% · 3.6 GWh</p>
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="flex-[1_0_0] min-w-[91.63999938964844px] relative" data-name="Margin">
      <div className="flex flex-col items-end min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end min-w-[inherit] pl-[193.223px] relative size-full">
          <Container26 />
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center pb-[10.625px] pt-[10px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#e8e8e8] border-b-[0.625px] border-solid inset-0 pointer-events-none" />
      <div className="bg-[#808080] relative rounded-[2px] shrink-0 size-[10px]" data-name="Background" />
      <Container25 />
      <Margin4 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Refrigeration</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">11% · 1.9 GWh</p>
      </div>
    </div>
  );
}

function Margin5() {
  return (
    <div className="flex-[1_0_0] min-w-[86.33999633789062px] relative" data-name="Margin">
      <div className="flex flex-col items-end min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end min-w-[inherit] pl-[164.414px] relative size-full">
          <Container28 />
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center pb-[10.625px] pt-[10px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#e8e8e8] border-b-[0.625px] border-solid inset-0 pointer-events-none" />
      <div className="bg-[#aaa] relative rounded-[2px] shrink-0 size-[10px]" data-name="Background" />
      <Container27 />
      <Margin5 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">{`Plug & other`}</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">6% · 1.0 GWh</p>
      </div>
    </div>
  );
}

function Margin6() {
  return (
    <div className="flex-[1_0_0] min-w-[85.05000305175781px] relative" data-name="Margin">
      <div className="flex flex-col items-end min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end min-w-[inherit] pl-[172.168px] relative size-full">
          <Container31 />
        </div>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex gap-[10px] items-center py-[10px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#d0d0d0] relative rounded-[2px] shrink-0 size-[10px]" data-name="Background" />
      <Container30 />
      <Margin6 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <HorizontalBorder1 />
      <HorizontalBorder2 />
      <HorizontalBorder3 />
      <Container29 />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#e8e8e8] relative rounded-[8px] shrink-0 w-full" data-name="Background">
      <div className="content-stretch flex flex-col items-start pb-[14.105px] pt-[13.355px] px-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
          <p className="mb-0">
            <span className="leading-[19.5px]">Opportunity:</span>
            <span className="[word-break:break-word] font-['Google_Sans_Flex:Regular',sans-serif] font-normal leading-[19.5px] not-italic text-[#5c5e62]" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>{` HVAC after-hours runtime at 6 sites`}</span>
          </p>
          <p className="font-['Google_Sans_Flex:Regular',sans-serif] font-normal leading-[19.5px] mb-0 text-[#5c5e62]" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
            totals ~$41k/yr. Tightening unoccupied setbacks
          </p>
          <p className="font-['Google_Sans_Flex:Regular',sans-serif] font-normal leading-[19.5px] text-[#5c5e62]" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
            recovers most of it.
          </p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[14px] items-start px-[24.625px] py-[22.625px] relative rounded-[12px] shrink-0 w-[420px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container20 />
      <Container21 />
      <Container22 />
      <Background1 />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Site efficiency ranking</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">kWh / sq ft · annualized</p>
      </div>
    </div>
  );
}

function Margin7() {
  return (
    <div className="flex-[1_0_0] min-w-[146.94000244140625px] relative" data-name="Margin">
      <div className="flex flex-col items-end min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end min-w-[inherit] pl-[331.357px] relative size-full">
          <Container34 />
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex gap-[0.003px] items-center pb-[10px] pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Container33 />
      <Margin7 />
    </div>
  );
}

function Container35() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[11px] tracking-[1.54px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">#</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[11px] tracking-[1.54px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Site</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[11px] tracking-[1.54px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">kWh/sqft</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="col-4 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[11px] tracking-[1.54px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">vs baseline</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="col-5 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[11px] tracking-[1.54px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Intensity</p>
      </div>
    </div>
  );
}

function HorizontalBorder4() {
  return (
    <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[_____minmax(0,0.50fr)_minmax(0,2fr)_minmax(0,1.20fr)_minmax(0,1.20fr)_minmax(0,2fr)] grid-rows-[_13.75px] h-[30.37px] pb-[8.625px] pt-[8px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#e8e8e8] border-b-[0.625px] border-solid inset-0 pointer-events-none" />
      <Container35 />
      <Container36 />
      <Container37 />
      <Container38 />
      <Container39 />
    </div>
  );
}

function Container40() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Dallas – Preston Rd</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">11.2</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="col-4 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium','Noto_Sans_Symbols2:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1d7a5e] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">▼ 9.4%</p>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#e8e8e8] col-5 h-[8px] justify-self-stretch overflow-clip relative rounded-[99px] row-1 self-center shrink-0" data-name="Background">
      <div className="absolute bg-[#456c88] inset-[0_62%_0_0]" data-name="Background" />
    </div>
  );
}

function HorizontalBorder5() {
  return (
    <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[_____minmax(0,0.50fr)_minmax(0,2fr)_minmax(0,1.20fr)_minmax(0,1.20fr)_minmax(0,2fr)] grid-rows-[_17.50px] h-[44.12px] pb-[13.625px] pt-[13px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#e8e8e8] border-b-[0.625px] border-solid inset-0 pointer-events-none" />
      <Container40 />
      <Container41 />
      <Container42 />
      <Container43 />
      <Background2 />
    </div>
  );
}

function Container44() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Denver – Cherry Creek</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">12.0</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="col-4 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium','Noto_Sans_Symbols2:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1d7a5e] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">▼ 6.1%</p>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#e8e8e8] col-5 h-[8px] justify-self-stretch overflow-clip relative rounded-[99px] row-1 self-center shrink-0" data-name="Background">
      <div className="absolute bg-[#456c88] inset-[0_58%_0_0]" data-name="Background" />
    </div>
  );
}

function HorizontalBorder6() {
  return (
    <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[_____minmax(0,0.50fr)_minmax(0,2fr)_minmax(0,1.20fr)_minmax(0,1.20fr)_minmax(0,2fr)] grid-rows-[_17.50px] h-[44.12px] pb-[13.625px] pt-[13px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#e8e8e8] border-b-[0.625px] border-solid inset-0 pointer-events-none" />
      <Container44 />
      <Container45 />
      <Container46 />
      <Container47 />
      <Background3 />
    </div>
  );
}

function Container48() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">3</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Atlanta – Midtown</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">13.4</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="col-4 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium','Noto_Sans_Symbols2:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1d7a5e] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">▼ 2.8%</p>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#e8e8e8] col-5 h-[8px] justify-self-stretch overflow-clip relative rounded-[99px] row-1 self-center shrink-0" data-name="Background">
      <div className="absolute bg-[#456c88] inset-[0_51%_0_0]" data-name="Background" />
    </div>
  );
}

function HorizontalBorder7() {
  return (
    <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[_____minmax(0,0.50fr)_minmax(0,2fr)_minmax(0,1.20fr)_minmax(0,1.20fr)_minmax(0,2fr)] grid-rows-[_17.50px] h-[44.12px] pb-[13.625px] pt-[13px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#e8e8e8] border-b-[0.625px] border-solid inset-0 pointer-events-none" />
      <Container48 />
      <Container49 />
      <Container50 />
      <Container51 />
      <Background4 />
    </div>
  );
}

function Container52() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">46</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Phoenix – Camelback</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">19.8</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="col-4 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium','Noto_Sans_Symbols2:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#9b7700] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">▲ 7.2%</p>
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#e8e8e8] col-5 h-[8px] justify-self-stretch overflow-clip relative rounded-[99px] row-1 self-center shrink-0" data-name="Background">
      <div className="absolute bg-[#808080] inset-[0_22%_0_0]" data-name="Background" />
    </div>
  );
}

function HorizontalBorder8() {
  return (
    <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[_____minmax(0,0.50fr)_minmax(0,2fr)_minmax(0,1.20fr)_minmax(0,1.20fr)_minmax(0,2fr)] grid-rows-[_17.50px] h-[44.12px] pb-[13.625px] pt-[13px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#e8e8e8] border-b-[0.625px] border-solid inset-0 pointer-events-none" />
      <Container52 />
      <Container53 />
      <Container54 />
      <Container55 />
      <Background5 />
    </div>
  );
}

function Container57() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">47</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Austin – Lamar Blvd</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">21.6</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="col-4 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium','Noto_Sans_Symbols2:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#9b2020] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">▲ 12.9%</p>
      </div>
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#e8e8e8] col-5 h-[8px] justify-self-stretch overflow-clip relative rounded-[99px] row-1 self-center shrink-0" data-name="Background">
      <div className="absolute bg-[#808080] inset-[0_12%_0_0]" data-name="Background" />
    </div>
  );
}

function Container56() {
  return (
    <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[_____minmax(0,0.50fr)_minmax(0,2fr)_minmax(0,1.20fr)_minmax(0,1.20fr)_minmax(0,2fr)] grid-rows-[_17.50px] h-[43.5px] py-[13px] relative shrink-0 w-full" data-name="Container">
      <Container57 />
      <Container58 />
      <Container59 />
      <Container60 />
      <Background6 />
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12.625px] pt-[8.625px] px-[24.625px] relative size-full">
        <Container32 />
        <HorizontalBorder4 />
        <HorizontalBorder5 />
        <HorizontalBorder6 />
        <HorizontalBorder7 />
        <HorizontalBorder8 />
        <Container56 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder2 />
      <BackgroundBorder3 />
    </div>
  );
}

function Container14() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[28px] py-[24px] relative size-full">
        <BackgroundBorder1 />
        <Container19 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative self-stretch" data-name="Container">
      <BackgroundHorizontalBorder />
      <Container14 />
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