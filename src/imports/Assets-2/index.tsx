import svgPaths from "./svg-bzt1pebw3n";

function Group() {
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
      <Group />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title">
      <p className="[word-break:break-word] font-['American_Grotesk:Bold',sans-serif] leading-[1.334] not-italic relative shrink-0 text-[#fffffc] text-[24px] whitespace-nowrap">Dashboard</p>
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
        <p className="leading-[normal]">Alerts</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#171a20] relative self-stretch shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col items-start px-[16px] py-[8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
          <p className="leading-[normal]">All 12</p>
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
          <p className="leading-[normal]">Critical 2</p>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder1() {
  return (
    <div className="relative self-stretch shrink-0" data-name="VerticalBorder">
      <div aria-hidden className="absolute border-[#d0d0d0] border-l-[0.625px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pl-[16.625px] pr-[16px] py-[8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
          <p className="leading-[normal]">Warning 6</p>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder2() {
  return (
    <div className="relative self-stretch shrink-0" data-name="VerticalBorder">
      <div aria-hidden className="absolute border-[#d0d0d0] border-l-[0.625px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pl-[16.625px] pr-[16px] py-[8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
          <p className="leading-[normal]">Info 4</p>
        </div>
      </div>
    </div>
  );
}

function Border() {
  return (
    <div className="h-[35.25px] relative rounded-[8px] shrink-0" data-name="Border">
      <div className="content-stretch flex items-start overflow-clip p-[0.625px] relative rounded-[inherit] size-full">
        <Background1 />
        <VerticalBorder />
        <VerticalBorder1 />
        <VerticalBorder2 />
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

function Container12() {
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
    <div className="content-stretch flex gap-[8.01px] items-center px-[12.625px] py-[8.625px] relative rounded-[6px] shrink-0" data-name="Border">
      <div aria-hidden className="absolute border border-[#d0d0d0] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[13.5px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">All sites</p>
      </div>
      <Container12 />
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#171a20] content-stretch flex flex-col items-start px-[18px] py-[10px] relative rounded-[8px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Create work order</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="flex-[1_0_0] min-w-[160.6999969482422px] relative" data-name="Margin">
      <div className="flex flex-col items-end min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end min-w-[inherit] pl-[456.875px] relative size-full">
          <Background2 />
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

function Container15() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#201d1c] text-[11px] tracking-[1.54px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Severity</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#201d1c] text-[11px] tracking-[1.54px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Alert</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#201d1c] text-[11px] tracking-[1.54px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Site</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="col-4 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#201d1c] text-[11px] tracking-[1.54px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Opened</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="col-5 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#201d1c] text-[11px] tracking-[1.54px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Status</p>
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="bg-[#c7d6df] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#e8e8e8] border-b-[0.625px] border-solid inset-0 pointer-events-none rounded-tl-[12px] rounded-tr-[12px]" />
      <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[_____minmax(0,0.90fr)_minmax(0,2.40fr)_minmax(0,1.60fr)_minmax(0,1fr)_minmax(0,1fr)] grid-rows-[_13.75px] px-[8px] py-[4px] relative size-full">
        <Container15 />
        <Container16 />
        <Container17 />
        <Container18 />
        <Container19 />
      </div>
    </div>
  );
}

function Typography() {
  return (
    <div className="content-stretch flex flex-col items-start px-[6px] relative shrink-0" data-name="Typography">
      <p className="[word-break:break-word] font-['Google_Sans_Flex:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#a8353f] text-[13px] tracking-[0.16px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        Critical
      </p>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex items-center px-[4px] py-[3px] relative rounded-[16px] shrink-0" data-name="Container">
      <Typography />
    </div>
  );
}

function Container20() {
  return (
    <div className="col-1 content-stretch flex h-[17.5px] items-center justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="bg-[rgba(231,74,79,0.1)] content-stretch flex flex-col items-start relative rounded-[12px] shrink-0" data-name="Chip">
        <Container21 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">RTU-2 supply fan failure</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Austin – Lamar Blvd</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="col-4 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">38 min ago</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="col-5 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Open</p>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder1() {
  return (
    <div className="h-[46.11px] relative rounded-[8px] shrink-0 w-full" data-name="Background+HorizontalBorder">
      <div aria-hidden className="absolute border-[#e8e8e8] border-b-[0.625px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[_____minmax(0,0.90fr)_minmax(0,2.40fr)_minmax(0,1.60fr)_minmax(0,1fr)_minmax(0,1fr)] grid-rows-[_17.50px] pb-[14.625px] pt-[14px] px-[16px] relative size-full">
        <Container20 />
        <Container22 />
        <Container23 />
        <Container24 />
        <Container25 />
      </div>
    </div>
  );
}

function Typography1() {
  return (
    <div className="content-stretch flex flex-col items-start px-[6px] relative shrink-0" data-name="Typography">
      <p className="[word-break:break-word] font-['Google_Sans_Flex:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#a8353f] text-[13px] tracking-[0.16px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        Critical
      </p>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex items-center px-[4px] py-[3px] relative rounded-[16px] shrink-0" data-name="Container">
      <Typography1 />
    </div>
  );
}

function Container26() {
  return (
    <div className="col-1 content-stretch flex h-[17.5px] items-center justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="bg-[rgba(231,74,79,0.1)] content-stretch flex flex-col items-start relative rounded-[12px] shrink-0" data-name="Chip">
        <Container27 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Site controller offline</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Tulsa – Cherry St</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="col-4 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">4 h ago</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="col-5 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Open</p>
      </div>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="h-[46.11px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#e8e8e8] border-b-[0.625px] border-solid inset-0 pointer-events-none" />
      <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[_____minmax(0,0.90fr)_minmax(0,2.40fr)_minmax(0,1.60fr)_minmax(0,1fr)_minmax(0,1fr)] grid-rows-[_17.50px] pb-[14.625px] pt-[14px] px-[16px] relative size-full">
        <Container26 />
        <Container28 />
        <Container29 />
        <Container30 />
        <Container31 />
      </div>
    </div>
  );
}

function Typography2() {
  return (
    <div className="content-stretch flex flex-col items-start px-[6px] relative shrink-0" data-name="Typography">
      <p className="[word-break:break-word] font-['Google_Sans_Flex:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#985014] text-[13px] tracking-[0.16px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        Warning
      </p>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex items-center px-[4px] py-[3px] relative rounded-[16px] shrink-0" data-name="Container">
      <Typography2 />
    </div>
  );
}

function Container32() {
  return (
    <div className="col-1 content-stretch flex h-[17.5px] items-center justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="bg-[rgba(237,108,2,0.1)] content-stretch flex flex-col items-start relative rounded-[12px] shrink-0" data-name="Chip">
        <Container33 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal] mb-0">Zone temp above setpoint 2°+</p>
        <p className="leading-[normal]">for 3 h</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Phoenix – Camelback</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="col-4 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">3 h ago</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="col-5 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Acknowledged</p>
      </div>
    </div>
  );
}

function HorizontalBorder3() {
  return (
    <div className="h-[63.61px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#e8e8e8] border-b-[0.625px] border-solid inset-0 pointer-events-none" />
      <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[_____minmax(0,0.90fr)_minmax(0,2.40fr)_minmax(0,1.60fr)_minmax(0,1fr)_minmax(0,1fr)] grid-rows-[_35px] pb-[14.625px] pt-[14px] px-[16px] relative size-full">
        <Container32 />
        <Container34 />
        <Container35 />
        <Container36 />
        <Container37 />
      </div>
    </div>
  );
}

function Typography3() {
  return (
    <div className="content-stretch flex flex-col items-start px-[6px] relative shrink-0" data-name="Typography">
      <p className="[word-break:break-word] font-['Google_Sans_Flex:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#985014] text-[13px] tracking-[0.16px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        Warning
      </p>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex items-center px-[4px] py-[3px] relative rounded-[16px] shrink-0" data-name="Container">
      <Typography3 />
    </div>
  );
}

function Container38() {
  return (
    <div className="col-1 content-stretch flex h-[17.5px] items-center justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="bg-[rgba(237,108,2,0.1)] content-stretch flex flex-col items-start relative rounded-[12px] shrink-0" data-name="Chip">
        <Container39 />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal] mb-0">RTU-1 runtime 22% above fleet</p>
        <p className="leading-[normal]">average</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal] mb-0">Denver – Cherry</p>
        <p className="leading-[normal]">Creek</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="col-4 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">6 h ago</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="col-5 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Open</p>
      </div>
    </div>
  );
}

function HorizontalBorder4() {
  return (
    <div className="h-[63.61px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#e8e8e8] border-b-[0.625px] border-solid inset-0 pointer-events-none" />
      <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[_____minmax(0,0.90fr)_minmax(0,2.40fr)_minmax(0,1.60fr)_minmax(0,1fr)_minmax(0,1fr)] grid-rows-[_35px] pb-[14.625px] pt-[14px] px-[16px] relative size-full">
        <Container38 />
        <Container40 />
        <Container41 />
        <Container42 />
        <Container43 />
      </div>
    </div>
  );
}

function Typography4() {
  return (
    <div className="content-stretch flex flex-col items-start px-[6px] relative shrink-0" data-name="Typography">
      <p className="[word-break:break-word] font-['Google_Sans_Flex:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#985014] text-[13px] tracking-[0.16px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        Warning
      </p>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex items-center px-[4px] py-[3px] relative rounded-[16px] shrink-0" data-name="Container">
      <Typography4 />
    </div>
  );
}

function Container44() {
  return (
    <div className="col-1 content-stretch flex h-[17.5px] items-center justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="bg-[rgba(237,108,2,0.1)] content-stretch flex flex-col items-start relative rounded-[12px] shrink-0" data-name="Chip">
        <Container45 />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Refrigeration case temp drift</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Houston – Galleria</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="col-4 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Yesterday</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="col-5 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Open</p>
      </div>
    </div>
  );
}

function HorizontalBorder5() {
  return (
    <div className="h-[46.11px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#e8e8e8] border-b-[0.625px] border-solid inset-0 pointer-events-none" />
      <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[_____minmax(0,0.90fr)_minmax(0,2.40fr)_minmax(0,1.60fr)_minmax(0,1fr)_minmax(0,1fr)] grid-rows-[_17.50px] pb-[14.625px] pt-[14px] px-[16px] relative size-full">
        <Container44 />
        <Container46 />
        <Container47 />
        <Container48 />
        <Container49 />
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="col-1 content-stretch flex gap-[7.99px] h-[17.5px] items-center justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="bg-[#c7d6df] relative rounded-[99px] shrink-0 size-[8px]" data-name="Background" />
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Info</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Filter change due at 4 sites</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Portfolio</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="col-4 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Today</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="col-5 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Scheduled</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[45.49px] relative shrink-0 w-full" data-name="Container">
      <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[_____minmax(0,0.90fr)_minmax(0,2.40fr)_minmax(0,1.60fr)_minmax(0,1fr)_minmax(0,1fr)] grid-rows-[_17.50px] px-[16px] py-[14px] relative size-full">
        <Container51 />
        <Container52 />
        <Container53 />
        <Container54 />
        <Container55 />
      </div>
    </div>
  );
}

function Typography5() {
  return (
    <div className="content-stretch flex flex-col items-start px-[6px] relative shrink-0" data-name="Typography">
      <p className="[word-break:break-word] font-['Google_Sans_Flex:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#a8353f] text-[13px] tracking-[0.16px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        Critical
      </p>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex items-center px-[4px] py-[3px] relative rounded-[16px] shrink-0" data-name="Container">
      <Typography5 />
    </div>
  );
}

function Container56() {
  return (
    <div className="col-1 content-stretch flex h-[17.5px] items-center justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="bg-[rgba(231,74,79,0.1)] content-stretch flex flex-col items-start relative rounded-[12px] shrink-0" data-name="Chip">
        <Container57 />
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">RTU-2 supply fan failure</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Austin – Lamar Blvd</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="col-4 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">38 min ago</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="col-5 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Open</p>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder2() {
  return (
    <div className="h-[46.11px] relative rounded-[8px] shrink-0 w-full" data-name="Background+HorizontalBorder">
      <div aria-hidden className="absolute border-[#e8e8e8] border-b-[0.625px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[_____minmax(0,0.90fr)_minmax(0,2.40fr)_minmax(0,1.60fr)_minmax(0,1fr)_minmax(0,1fr)] grid-rows-[_17.50px] pb-[14.625px] pt-[14px] px-[16px] relative size-full">
        <Container56 />
        <Container58 />
        <Container59 />
        <Container60 />
        <Container61 />
      </div>
    </div>
  );
}

function Typography6() {
  return (
    <div className="content-stretch flex flex-col items-start px-[6px] relative shrink-0" data-name="Typography">
      <p className="[word-break:break-word] font-['Google_Sans_Flex:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#a8353f] text-[13px] tracking-[0.16px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        Critical
      </p>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex items-center px-[4px] py-[3px] relative rounded-[16px] shrink-0" data-name="Container">
      <Typography6 />
    </div>
  );
}

function Container62() {
  return (
    <div className="col-1 content-stretch flex h-[17.5px] items-center justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="bg-[rgba(231,74,79,0.1)] content-stretch flex flex-col items-start relative rounded-[12px] shrink-0" data-name="Chip">
        <Container63 />
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Site controller offline</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Tulsa – Cherry St</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="col-4 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">4 h ago</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="col-5 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Open</p>
      </div>
    </div>
  );
}

function HorizontalBorder6() {
  return (
    <div className="h-[46.11px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#e8e8e8] border-b-[0.625px] border-solid inset-0 pointer-events-none" />
      <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[_____minmax(0,0.90fr)_minmax(0,2.40fr)_minmax(0,1.60fr)_minmax(0,1fr)_minmax(0,1fr)] grid-rows-[_17.50px] pb-[14.625px] pt-[14px] px-[16px] relative size-full">
        <Container62 />
        <Container64 />
        <Container65 />
        <Container66 />
        <Container67 />
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="col-1 content-stretch flex gap-[7.99px] h-[17.5px] items-center justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="bg-[#9b7700] relative rounded-[99px] shrink-0 size-[8px]" data-name="Background" />
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#9b7700] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Warning</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal] mb-0">Zone temp above setpoint 2°+</p>
        <p className="leading-[normal]">for 3 h</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Phoenix – Camelback</p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="col-4 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">3 h ago</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="col-5 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Acknowledged</p>
      </div>
    </div>
  );
}

function HorizontalBorder7() {
  return (
    <div className="h-[63.61px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#e8e8e8] border-b-[0.625px] border-solid inset-0 pointer-events-none" />
      <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[_____minmax(0,0.90fr)_minmax(0,2.40fr)_minmax(0,1.60fr)_minmax(0,1fr)_minmax(0,1fr)] grid-rows-[_35px] pb-[14.625px] pt-[14px] px-[16px] relative size-full">
        <Container68 />
        <Container69 />
        <Container70 />
        <Container71 />
        <Container72 />
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="col-1 content-stretch flex gap-[7.99px] h-[17.5px] items-center justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="bg-[#9b7700] relative rounded-[99px] shrink-0 size-[8px]" data-name="Background" />
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#9b7700] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Warning</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal] mb-0">RTU-1 runtime 22% above fleet</p>
        <p className="leading-[normal]">average</p>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal] mb-0">Denver – Cherry</p>
        <p className="leading-[normal]">Creek</p>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="col-4 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">6 h ago</p>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="col-5 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Open</p>
      </div>
    </div>
  );
}

function HorizontalBorder8() {
  return (
    <div className="h-[63.61px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#e8e8e8] border-b-[0.625px] border-solid inset-0 pointer-events-none" />
      <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[_____minmax(0,0.90fr)_minmax(0,2.40fr)_minmax(0,1.60fr)_minmax(0,1fr)_minmax(0,1fr)] grid-rows-[_35px] pb-[14.625px] pt-[14px] px-[16px] relative size-full">
        <Container73 />
        <Container74 />
        <Container75 />
        <Container76 />
        <Container77 />
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="col-1 content-stretch flex gap-[7.99px] h-[17.5px] items-center justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="bg-[#9b7700] relative rounded-[99px] shrink-0 size-[8px]" data-name="Background" />
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#9b7700] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Warning</p>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Refrigeration case temp drift</p>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Houston – Galleria</p>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="col-4 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Yesterday</p>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="col-5 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Open</p>
      </div>
    </div>
  );
}

function HorizontalBorder9() {
  return (
    <div className="h-[46.11px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#e8e8e8] border-b-[0.625px] border-solid inset-0 pointer-events-none" />
      <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[_____minmax(0,0.90fr)_minmax(0,2.40fr)_minmax(0,1.60fr)_minmax(0,1fr)_minmax(0,1fr)] grid-rows-[_17.50px] pb-[14.625px] pt-[14px] px-[16px] relative size-full">
        <Container78 />
        <Container79 />
        <Container80 />
        <Container81 />
        <Container82 />
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="col-1 content-stretch flex gap-[7.99px] h-[17.5px] items-center justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="bg-[#c7d6df] relative rounded-[99px] shrink-0 size-[8px]" data-name="Background" />
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Info</p>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Filter change due at 4 sites</p>
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Portfolio</p>
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="col-4 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Today</p>
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="col-5 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Scheduled</p>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="h-[45.49px] relative shrink-0 w-full" data-name="Container">
      <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[_____minmax(0,0.90fr)_minmax(0,2.40fr)_minmax(0,1.60fr)_minmax(0,1fr)_minmax(0,1fr)] grid-rows-[_17.50px] px-[16px] py-[14px] relative size-full">
        <Container84 />
        <Container85 />
        <Container86 />
        <Container87 />
        <Container88 />
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[16px] relative size-full">
          <HorizontalBorder1 />
          <BackgroundHorizontalBorder1 />
          <HorizontalBorder2 />
          <HorizontalBorder3 />
          <HorizontalBorder4 />
          <HorizontalBorder5 />
          <Container50 />
          <BackgroundHorizontalBorder2 />
          <HorizontalBorder6 />
          <HorizontalBorder7 />
          <HorizontalBorder8 />
          <HorizontalBorder9 />
          <Container83 />
        </div>
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] capitalize flex flex-col font-['Google_Sans_Flex:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#201d1c] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Open work orders</p>
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium','Noto_Sans_Symbols:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">All work orders →</p>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="flex-[1_0_0] min-w-[111.25px] relative" data-name="Margin">
      <div className="flex flex-col items-end min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end min-w-[inherit] pl-[473.721px] relative size-full">
          <Container92 />
        </div>
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex gap-[0.009px] items-center relative shrink-0 w-full" data-name="Container">
      <Container91 />
      <Margin2 />
    </div>
  );
}

function Container95() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">WO-1042</p>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#171a20] content-stretch flex flex-col items-start px-[10px] py-[4px] relative rounded-[99px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[11.5px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Dispatched</p>
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="flex-[1_0_0] min-w-[85.79000091552734px] relative" data-name="Margin">
      <div className="flex flex-col items-end min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end min-w-[inherit] pl-[50.986px] relative size-full">
          <Background3 />
        </div>
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="content-stretch flex gap-[8.004px] items-center relative shrink-0 w-full" data-name="Container">
      <Container95 />
      <Margin3 />
    </div>
  );
}

function Container96() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[3.17px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[14px] w-full" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[19.6px]">Replace supply fan motor · RTU-2</p>
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[14px] w-full" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal] mb-0">Austin – Lamar Blvd · Hobbs</p>
        <p className="leading-[normal]">Mechanical · ETA today 4 pm</p>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[6px] items-start pb-[17.87px] pt-[16.63px] px-[18.625px] relative size-full">
        <Container94 />
        <Container96 />
        <Container97 />
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">WO-1039</p>
      </div>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="bg-[#e8e8e8] content-stretch flex flex-col items-start px-[10.625px] py-[4.625px] relative rounded-[99px] shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[99px]" />
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[11.5px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Awaiting parts</p>
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="flex-[1_0_0] min-w-[104.4800033569336px] relative" data-name="Margin">
      <div className="flex flex-col items-end min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end min-w-[inherit] pl-[32.461px] relative size-full">
          <BackgroundBorder3 />
        </div>
      </div>
    </div>
  );
}

function Container98() {
  return (
    <div className="content-stretch flex gap-[7.989px] items-center relative shrink-0 w-full" data-name="Container">
      <Container99 />
      <Margin4 />
    </div>
  );
}

function Container100() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[3.17px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[14px] w-full" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[19.6px]">Economizer damper actuator · RTU-3</p>
      </div>
    </div>
  );
}

function Container101() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[14px] w-full" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal] mb-0">Houston – Galleria · Airtech</p>
        <p className="leading-[normal]">Services · parts ETA Jul 11</p>
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[6px] items-start px-[18.625px] py-[16.625px] relative size-full">
        <Container98 />
        <Container100 />
        <Container101 />
      </div>
    </div>
  );
}

function Container103() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">WO-1036</p>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#c7d6df] content-stretch flex flex-col items-start px-[10px] py-[4px] relative rounded-[99px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2e2c28] text-[11.5px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Scheduled</p>
      </div>
    </div>
  );
}

function Margin5() {
  return (
    <div className="flex-[1_0_0] min-w-[81.04000091552734px] relative" data-name="Margin">
      <div className="flex flex-col items-end min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end min-w-[inherit] pl-[55.908px] relative size-full">
          <Background4 />
        </div>
      </div>
    </div>
  );
}

function Container102() {
  return (
    <div className="content-stretch flex gap-[8.002px] items-center relative shrink-0 w-full" data-name="Container">
      <Container103 />
      <Margin5 />
    </div>
  );
}

function Container104() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[3.17px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[14px] w-full" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[19.6px]">Quarterly filter change · 4 sites</p>
      </div>
    </div>
  );
}

function Container105() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[14px] w-full" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal] mb-0">Portfolio · in-house · week of Jul</p>
        <p className="leading-[normal]">13</p>
      </div>
    </div>
  );
}

function BackgroundBorder4() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[6px] items-start pb-[17.87px] pt-[16.63px] px-[18.625px] relative size-full">
        <Container102 />
        <Container104 />
        <Container105 />
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch flex gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder1 />
      <BackgroundBorder2 />
      <BackgroundBorder4 />
    </div>
  );
}

function Container89() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Container">
      <Container90 />
      <Container93 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[15.99px] h-full items-start min-w-px relative" data-name="Container">
      <BackgroundBorder />
      <Container89 />
    </div>
  );
}

function Container107() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#9b2020] text-[11px] tracking-[1.76px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Critical · Open</p>
      </div>
    </div>
  );
}

function Container106() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#9b2020] relative rounded-[99px] shrink-0 size-[8.99px]" data-name="Background" />
      <Container107 />
    </div>
  );
}

function Container108() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[3.375px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[19px] w-full" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[24.7px]">RTU-2 supply fan failure</p>
      </div>
    </div>
  );
}

function Container109() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[9.99px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[13.5px] w-full" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Austin – Lamar Blvd · Sales Floor · opened 1:42 pm</p>
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#e8e8e8] relative rounded-[8px] shrink-0 w-full" data-name="Background">
      <div className="content-stretch flex flex-col items-start px-[16px] py-[14px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[13.5px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
          <p className="leading-[20.93px] mb-0">Supply fan commanded on but no airflow</p>
          <p className="leading-[20.93px] mb-0">proven for 3 consecutive cycles. Unit locked</p>
          <p className="leading-[20.93px]">out. Sales Floor cooling load shifted to RTU-1.</p>
        </div>
      </div>
    </div>
  );
}

function Container111() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[63.99px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">1:42 pm</p>
      </div>
    </div>
  );
}

function Container112() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Fault detected · alert raised</p>
      </div>
    </div>
  );
}

function HorizontalBorder10() {
  return (
    <div className="content-stretch flex gap-[12px] h-[38.625px] items-start pb-[10.625px] pt-[10px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#e8e8e8] border-b-[0.625px] border-solid inset-0 pointer-events-none" />
      <Container111 />
      <Container112 />
    </div>
  );
}

function Container113() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[63.99px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">1:44 pm</p>
      </div>
    </div>
  );
}

function Container114() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Load shed to RTU-1 · automated</p>
      </div>
    </div>
  );
}

function HorizontalBorder11() {
  return (
    <div className="content-stretch flex gap-[12px] h-[38.625px] items-start pb-[10.625px] pt-[10px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#e8e8e8] border-b-[0.625px] border-solid inset-0 pointer-events-none" />
      <Container113 />
      <Container114 />
    </div>
  );
}

function Container116() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[54.88px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">1:58 pm</p>
      </div>
    </div>
  );
}

function Container117() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[29.5px] relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal] mb-0">WO-1042 created · Hobbs Mechanical</p>
        <p className="leading-[normal]">dispatched</p>
      </div>
    </div>
  );
}

function Container115() {
  return (
    <div className="content-stretch flex gap-[12px] h-[56px] items-start py-[10px] relative shrink-0 w-full" data-name="Container">
      <Container116 />
      <Container117 />
    </div>
  );
}

function Container118() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[63.99px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">1:42 pm</p>
      </div>
    </div>
  );
}

function Container119() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Fault detected · alert raised</p>
      </div>
    </div>
  );
}

function HorizontalBorder12() {
  return (
    <div className="content-stretch flex gap-[12px] h-[38.625px] items-start pb-[10.625px] pt-[10px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#e8e8e8] border-b-[0.625px] border-solid inset-0 pointer-events-none" />
      <Container118 />
      <Container119 />
    </div>
  );
}

function Container120() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[63.99px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">1:44 pm</p>
      </div>
    </div>
  );
}

function Container121() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Load shed to RTU-1 · automated</p>
      </div>
    </div>
  );
}

function HorizontalBorder13() {
  return (
    <div className="content-stretch flex gap-[12px] h-[38.625px] items-start pb-[10.625px] pt-[10px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#e8e8e8] border-b-[0.625px] border-solid inset-0 pointer-events-none" />
      <Container120 />
      <Container121 />
    </div>
  );
}

function Container123() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[54.88px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">1:58 pm</p>
      </div>
    </div>
  );
}

function Container124() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[29.5px] relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal] mb-0">WO-1042 created · Hobbs Mechanical</p>
        <p className="leading-[normal]">dispatched</p>
      </div>
    </div>
  );
}

function Container122() {
  return (
    <div className="content-stretch flex gap-[12px] h-[56px] items-start py-[10px] relative shrink-0 w-full" data-name="Container">
      <Container123 />
      <Container124 />
    </div>
  );
}

function Container125() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[63.99px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">1:42 pm</p>
      </div>
    </div>
  );
}

function Container126() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Fault detected · alert raised</p>
      </div>
    </div>
  );
}

function HorizontalBorder14() {
  return (
    <div className="content-stretch flex gap-[12px] h-[38.625px] items-start pb-[10.625px] pt-[10px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#e8e8e8] border-b-[0.625px] border-solid inset-0 pointer-events-none" />
      <Container125 />
      <Container126 />
    </div>
  );
}

function Container127() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[63.99px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">1:44 pm</p>
      </div>
    </div>
  );
}

function Container128() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Load shed to RTU-1 · automated</p>
      </div>
    </div>
  );
}

function HorizontalBorder15() {
  return (
    <div className="content-stretch flex gap-[12px] h-[38.625px] items-start pb-[10.625px] pt-[10px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#e8e8e8] border-b-[0.625px] border-solid inset-0 pointer-events-none" />
      <Container127 />
      <Container128 />
    </div>
  );
}

function Container130() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[54.88px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">1:58 pm</p>
      </div>
    </div>
  );
}

function Container131() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[29.5px] relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal] mb-0">WO-1042 created · Hobbs Mechanical</p>
        <p className="leading-[normal]">dispatched</p>
      </div>
    </div>
  );
}

function Container129() {
  return (
    <div className="content-stretch flex gap-[12px] h-[56px] items-start py-[10px] relative shrink-0 w-full" data-name="Container">
      <Container130 />
      <Container131 />
    </div>
  );
}

function Container132() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[63.99px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">1:42 pm</p>
      </div>
    </div>
  );
}

function Container133() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Fault detected · alert raised</p>
      </div>
    </div>
  );
}

function HorizontalBorder16() {
  return (
    <div className="content-stretch flex gap-[12px] h-[38.625px] items-start pb-[10.625px] pt-[10px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#e8e8e8] border-b-[0.625px] border-solid inset-0 pointer-events-none" />
      <Container132 />
      <Container133 />
    </div>
  );
}

function Container134() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[63.99px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">1:44 pm</p>
      </div>
    </div>
  );
}

function Container135() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Load shed to RTU-1 · automated</p>
      </div>
    </div>
  );
}

function HorizontalBorder17() {
  return (
    <div className="content-stretch flex gap-[12px] h-[38.625px] items-start pb-[10.625px] pt-[10px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#e8e8e8] border-b-[0.625px] border-solid inset-0 pointer-events-none" />
      <Container134 />
      <Container135 />
    </div>
  );
}

function Container137() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 w-[54.88px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">1:58 pm</p>
      </div>
    </div>
  );
}

function Container138() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[29.5px] relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal] mb-0">WO-1042 created · Hobbs Mechanical</p>
        <p className="leading-[normal]">dispatched</p>
      </div>
    </div>
  );
}

function Container136() {
  return (
    <div className="content-stretch flex gap-[12px] h-[56px] items-start py-[10px] relative shrink-0 w-full" data-name="Container">
      <Container137 />
      <Container138 />
    </div>
  );
}

function Container110() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Container">
      <HorizontalBorder10 />
      <HorizontalBorder11 />
      <Container115 />
      <HorizontalBorder12 />
      <HorizontalBorder13 />
      <Container122 />
      <HorizontalBorder14 />
      <HorizontalBorder15 />
      <Container129 />
      <HorizontalBorder16 />
      <HorizontalBorder17 />
      <Container136 />
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#171a20] relative rounded-[8px] self-stretch shrink-0 w-[159.76px]" data-name="Background">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center py-[11px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
            <p className="leading-[normal]">View work order</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder6() {
  return (
    <div className="bg-white relative rounded-[8px] self-stretch shrink-0 w-[161.01px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#d0d0d0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[0.625px] py-[11.625px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
            <p className="leading-[normal]">Acknowledge</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container139() {
  return (
    <div className="content-stretch flex gap-[10px] h-[53.25px] items-start justify-center pt-[12px] relative shrink-0 w-full" data-name="Container">
      <Background6 />
      <BackgroundBorder6 />
    </div>
  );
}

function BackgroundBorder5() {
  return (
    <div className="bg-white h-full relative rounded-[12px] shrink-0 w-[380px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[6px] items-start px-[24.625px] py-[22.625px] relative size-full">
        <Container106 />
        <Container108 />
        <Container109 />
        <Background5 />
        <Container110 />
        <Container139 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container">
      <div className="content-stretch flex gap-[15.99px] items-start px-[28px] py-[24px] relative size-full">
        <Container14 />
        <BackgroundBorder5 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative self-stretch" data-name="Container">
      <BackgroundHorizontalBorder />
      <Container13 />
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