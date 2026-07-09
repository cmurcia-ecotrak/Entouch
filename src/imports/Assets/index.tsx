import svgPaths from "./svg-arf5trxobl";

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
            <p className="[word-break:break-word] font-['Test_American_Grotesk:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] leading-[1.5] opacity-42 relative shrink-0 text-[#f9f8f5] text-[16px] tracking-[0.15px] whitespace-nowrap" style={{ fontVariationSettings: '"CTGR" 0, "wdth" 100, "wght" 400' }}>
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
      <div className="content-stretch flex items-start relative shrink-0" data-name="Icon">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="PieChart">
          <div className="absolute inset-[8.33%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={svgPaths.p3e71a600} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
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
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Contacts">
        <div className="absolute inset-[0_8.33%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 24">
            <path d={svgPaths.p1550e680} fill="var(--fill-0, white)" id="Vector" />
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
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="MonetizationOn">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p3b037100} fill="var(--fill-0, white)" id="Vector" />
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
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Description">
        <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
            <path d={svgPaths.p38550000} fill="var(--fill-0, white)" id="Vector" />
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
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="LibraryAdd">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p2f658380} fill="var(--fill-0, white)" id="Vector" />
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

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[32px] relative shrink-0" data-name="Container">
      <div className="content-stretch flex items-start relative shrink-0" data-name="Icon">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Construction">
          <div className="absolute inset-[10.88%_8.75%_11.8%_8.75%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.8002 18.5558">
              <g id="Vector">
                <path d={svgPaths.p3e86b580} fill="white" />
                <path d={svgPaths.p21545600} fill="white" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextContainer7() {
  return <div className="flex-[1_0_0] h-[32px] min-w-px relative" data-name="Text Container" />;
}

function ListItem7() {
  return (
    <div className="relative shrink-0 w-full" data-name="ListItem">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <Container10 />
          <TextContainer7 />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[20px] relative shrink-0 w-full">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58 20">
        <g id="Frame 227">
          <line id="Line 31" stroke="var(--stroke-0, white)" x1="48" x2="10" y1="10.5" y2="10.5" />
        </g>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[32px] relative shrink-0" data-name="Container">
      <div className="content-stretch flex items-start relative shrink-0" data-name="Icon">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="MapsHomeWork">
          <div className="absolute inset-[12.5%_4.17%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 18">
              <g id="Vector">
                <path d={svgPaths.p27c88580} fill="white" />
                <path d={svgPaths.p1c720400} fill="white" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextContainer8() {
  return <div className="flex-[1_0_0] h-[32px] min-w-px relative" data-name="Text Container" />;
}

function ListItem8() {
  return (
    <div className="relative shrink-0 w-full" data-name="ListItem">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <Container11 />
          <TextContainer8 />
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[32px] relative shrink-0" data-name="Container">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="HomeRepairService">
        <div className="absolute inset-[16.67%_8.33%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
            <g id="Vector">
              <path d={svgPaths.p1dac3100} fill="white" />
              <path d={svgPaths.p3e616d00} fill="white" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function TextContainer9() {
  return <div className="flex-[1_0_0] h-[32px] min-w-px relative" data-name="Text Container" />;
}

function ListItem9() {
  return (
    <div className="relative shrink-0 w-full" data-name="ListItem">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <Container12 />
          <TextContainer9 />
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[32px] relative shrink-0" data-name="Container">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Engineering">
        <div className="absolute inset-[12.5%_4.61%_12.5%_4.17%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.8934 18">
            <g id="Vector">
              <path d={svgPaths.p3fbc9880} fill="white" />
              <path d={svgPaths.p10a6eb00} fill="white" />
              <path d={svgPaths.p30114200} fill="white" />
              <path d={svgPaths.p2dae7c80} fill="white" />
              <path d={svgPaths.p3a085570} fill="white" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function TextContainer10() {
  return <div className="flex-[1_0_0] h-[32px] min-w-px relative" data-name="Text Container" />;
}

function ListItem10() {
  return (
    <div className="bg-[#61899f] relative shrink-0 w-full" data-name="ListItem">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <Container13 />
          <TextContainer10 />
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[32px] relative shrink-0" data-name="Container">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Calculate">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.p21f1af80} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TextContainer11() {
  return <div className="flex-[1_0_0] h-[32px] min-w-px relative" data-name="Text Container" />;
}

function ListItem11() {
  return (
    <div className="relative shrink-0 w-full" data-name="ListItem">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <Container14 />
          <TextContainer11 />
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[32px] relative shrink-0" data-name="Container">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="SettingsSuggest">
        <div className="absolute inset-[8.33%_4.17%_8.33%_7.58%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.18 20">
            <path d={svgPaths.p284b4600} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TextContainer12() {
  return <div className="flex-[1_0_0] h-[32px] min-w-px relative" data-name="Text Container" />;
}

function ListItem12() {
  return (
    <div className="relative shrink-0 w-full" data-name="ListItem">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">
          <Container15 />
          <TextContainer12 />
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
      <ListItem7 />
      <Frame />
      <ListItem8 />
      <ListItem9 />
      <ListItem10 />
      <ListItem11 />
      <ListItem12 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative">
      <p className="[word-break:break-word] font-['Google_Sans_Flex:Bold',sans-serif] font-bold leading-[1.235] not-italic relative shrink-0 text-[#181a1d] text-[28px] tracking-[0.25px] w-[1782px]" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        Friday, November 11th 2026
      </p>
    </div>
  );
}

function Inactive() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip py-[8px] relative shrink-0" data-name="Inactive">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="CalendarToday">
        <div className="absolute inset-[4.17%_8.33%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 22">
            <path d={svgPaths.p36026d80} fill="var(--fill-0, #201D1C)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[13.5px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Last 30 days</p>
      </div>
      <div className="content-stretch flex items-start relative shrink-0" data-name="Arrow">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="ArrowDropDown">
          <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
              <path d="M0 0L5 5L10 0H0Z" fill="var(--fill-0, #201D1C)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Input">
      <div aria-hidden className="absolute border border-[#eeeadc] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start px-[12px] relative size-full">
        <Inactive />
      </div>
    </div>
  );
}

function SelectOutlined() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[170px]" data-name="Select/Outlined">
      <Input />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
      <Frame3 />
      <SelectOutlined />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[11px] tracking-[1.98px] uppercase w-full" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Energy Spend · MTD</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[34px] text-white w-full" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[34px]">$184,210</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium','Noto_Sans:Medium','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Medium','Noto_Sans_Symbols2:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#7fbfa8] text-[0px] w-full" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="text-[14px]">
          <span className="leading-[normal]">▼ 6.2%</span>
          <span className="[word-break:break-word] font-['Google_Sans_Flex:Regular','Noto_Sans:Medium','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Medium','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[normal] not-italic text-[#aaa]" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>{` vs same period last year`}</span>
        </p>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#171a20] flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#171a20] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[10px] items-start px-[22.625px] py-[20.625px] relative size-full">
        <Container19 />
        <Container20 />
        <Container21 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[11px] tracking-[1.98px] uppercase w-full" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Consumption</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="[word-break:break-word] font-['Google_Sans_Flex:Regular',sans-serif] font-normal h-[34px] leading-[0] not-italic relative shrink-0 w-full" data-name="Paragraph">
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-0 text-[#171a20] text-[34px] top-[16.56px] w-[60.134px]" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[34px]">{`1.42 `}</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[64.28px] text-[#808080] text-[16px] top-[22.5px] w-[38.101px]" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[16px]">GWh</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium','Noto_Sans:Medium','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Medium','Noto_Sans_Symbols2:Regular',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#467855] text-[0px] w-full" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="text-[14px]">
          <span className="leading-[normal]">▼ 4.8%</span>
          <span className="[word-break:break-word] font-['Google_Sans_Flex:Regular','Noto_Sans:Medium','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Medium','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[normal] not-italic text-[#808080]" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>{` vs baseline`}</span>
        </p>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[10px] items-start px-[22.625px] py-[20.625px] relative size-full">
        <Container22 />
        <Paragraph />
        <Container23 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[11px] tracking-[1.98px] uppercase w-full" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Open Alerts</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[34px] w-full" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[34px]">12</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#a8353f] text-[0px] w-full" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="text-[14px]">
          <span className="leading-[normal]">2 critical</span>
          <span className="[word-break:break-word] font-['Google_Sans_Flex:Regular',sans-serif] font-normal leading-[normal] not-italic text-[#808080]" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>{` · 6 warning · 4 info`}</span>
        </p>
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[10px] items-start px-[22.625px] py-[20.625px] relative size-full">
        <Container24 />
        <Container25 />
        <Container26 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[11px] tracking-[1.98px] uppercase w-full" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Sites Online</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="[word-break:break-word] font-['Google_Sans_Flex:Regular',sans-serif] font-normal h-[34px] leading-[0] not-italic relative shrink-0 w-full" data-name="Paragraph">
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-0 text-[#171a20] text-[34px] top-[16.56px] w-[41.175px]" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[34px]">46</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[38.83px] text-[#808080] text-[16px] top-[22.5px] w-[32.173px]" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[16px]">{` / 48`}</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[14px] w-full" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">{`2 sites offline > 4h`}</p>
      </div>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[10px] items-start px-[22.625px] py-[20.625px] relative size-full">
        <Container27 />
        <Paragraph1 />
        <Container28 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder />
      <BackgroundBorder1 />
      <BackgroundBorder2 />
      <BackgroundBorder3 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex gap-[6.99px] items-center relative self-stretch shrink-0" data-name="Container">
      <div className="bg-[#171a20] h-[1.99px] relative shrink-0 w-[16px]" data-name="Horizontal Divider" />
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Actual</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex gap-[6.98px] items-center relative self-stretch shrink-0" data-name="Container">
      <div className="h-[1.88px] relative shrink-0 w-[16px]" data-name="Horizontal Divider">
        <div aria-hidden className="absolute border-[#aaa] border-dashed border-t-[1.875px] inset-0 pointer-events-none" />
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Baseline</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex gap-[16px] h-[18px] items-start relative shrink-0" data-name="Container">
      <Container32 />
      <Container33 />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-end min-w-[150.72000122070312px] pl-[309.199px] relative shrink-0 w-[459.919px]" data-name="Margin">
      <Container31 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex gap-[68px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Portfolio energy use</p>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[14px] w-[136px]" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">kWh · daily</p>
      </div>
      <Margin />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[8.7%_1.3%_13.04%_5.27%]" data-name="Group">
      <div className="absolute inset-[8.7%_1.32%_91.3%_5.27%]" data-name="Vector">
        <div className="absolute inset-[-0.46px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 830.254 0.929947">
            <path d="M0 0.464974H830.254" id="Vector" stroke="var(--stroke-0, #E8E8E8)" strokeWidth="0.929947" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[30.43%_1.3%_69.57%_5.28%]" data-name="Vector">
        <div className="absolute inset-[-0.46px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 830.254 0.929947">
            <path d="M0 0.464974H830.254" id="Vector" stroke="var(--stroke-0, #E8E8E8)" strokeWidth="0.929947" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[52.17%_1.3%_47.83%_5.28%]" data-name="Vector">
        <div className="absolute inset-[-0.46px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 830.254 0.929947">
            <path d="M0 0.464974H830.254" id="Vector" stroke="var(--stroke-0, #E8E8E8)" strokeWidth="0.929947" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[73.91%_1.3%_26.09%_5.28%]" data-name="Vector">
        <div className="absolute inset-[-0.46px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 830.254 0.929947">
            <path d="M0 0.464974H830.254" id="Vector" stroke="var(--stroke-0, #E8E8E8)" strokeWidth="0.929947" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[86.96%_1.3%_13.04%_5.28%]" data-name="Vector">
        <div className="absolute inset-[-0.46px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 830.254 0.929947">
            <path d="M0 0.464974H830.254" id="Vector" stroke="var(--stroke-0, #E8E8E8)" strokeWidth="0.929947" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="[word-break:break-word] absolute contents font-['Google_Sans_Code:Regular',sans-serif] font-normal inset-[5.65%_1.41%_3.49%_0] leading-[normal] text-[#808080] text-[10.229px]" data-name="Group">
      <p className="absolute inset-[5.65%_97.31%_88.27%_0]">60k</p>
      <p className="absolute inset-[27.39%_97.31%_66.53%_0]">55k</p>
      <p className="absolute inset-[49.13%_97.31%_44.79%_0]">50k</p>
      <p className="absolute inset-[70.87%_97.31%_23.05%_0]">45k</p>
      <p className="absolute inset-[90.43%_89.56%_3.49%_6.05%]">Jun 8</p>
      <p className="absolute inset-[90.43%_65.82%_3.49%_28.95%]">Jun 15</p>
      <p className="absolute inset-[90.43%_42.13%_3.49%_52.63%]">Jun 22</p>
      <p className="absolute inset-[90.43%_18.45%_3.49%_76.31%]">Jun 29</p>
      <p className="absolute inset-[90.43%_1.41%_3.49%_94.21%]">Jul 7</p>
    </div>
  );
}

function Svg() {
  return (
    <div className="h-[213.888px] overflow-clip relative shrink-0 w-full" data-name="SVG">
      <Group />
      <Group2 />
      <div className="absolute inset-[36.52%_1.32%_13.04%_5.27%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 830.254 107.874">
          <path d={svgPaths.p3517b700} fill="var(--fill-0, #C7D6DF)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[36.52%_1.32%_29.57%_5.27%]" data-name="Vector">
        <div className="absolute inset-[-1.32%_0_-1.25%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 830.621 74.4033">
            <path d={svgPaths.p375d2480} id="Vector" stroke="var(--stroke-0, #171A20)" strokeWidth="1.85989" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[33.91%_1.32%_38.26%_5.27%]" data-name="Vector">
        <div className="absolute inset-[-1.17%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 830.316 60.91">
            <path d={svgPaths.p2a665100} id="Vector" stroke="var(--stroke-0, #AAAAAA)" strokeDasharray="4.65 4.65" strokeWidth="1.39492" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[68.7%_0.79%_27.83%_98.16%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.35506 7.43955">
          <path d={svgPaths.p2102a100} fill="var(--fill-0, #171A20)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function BackgroundBorder4() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[13.99px] items-start pb-[24px] pt-[22.62px] px-[24.625px] relative size-full">
        <Container30 />
        <Svg />
      </div>
    </div>
  );
}

function Value() {
  return (
    <div className="content-stretch flex gap-[4px] items-baseline relative shrink-0" data-name="value">
      <p className="font-['Google_Sans_Flex:Medium',sans-serif] font-medium leading-[36px] relative shrink-0 text-[#312e33] text-[24px]" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        3,963
      </p>
      <p className="font-['Google_Sans_Flex:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#76706e] text-[10px]" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        kWh
      </p>
    </div>
  );
}

function TileLeft() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start justify-end not-italic relative shrink-0 whitespace-nowrap" data-name="tile-left">
      <p className="font-['Google_Sans_Flex:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#433f3d] text-[12px]" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        Total Energy
      </p>
      <Value />
    </div>
  );
}

function TileRight() {
  return (
    <div className="content-stretch flex flex-col items-end justify-end pb-[10px] relative shrink-0" data-name="tile-right">
      <div className="bg-[rgba(50,193,117,0.1)] content-stretch flex items-center justify-center px-[8px] py-px relative rounded-[10px] shrink-0" data-name="badge">
        <p className="[word-break:break-word] font-['Google_Sans_Flex:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#467855] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
          -23%
        </p>
      </div>
    </div>
  );
}

function Wrapper1() {
  return (
    <div className="relative shrink-0 w-full" data-name="wrapper">
      <div className="flex flex-row items-end justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-end justify-between p-[16px] relative size-full">
          <TileLeft />
          <TileRight />
        </div>
      </div>
    </div>
  );
}

function Value1() {
  return (
    <div className="content-stretch flex gap-[4px] items-baseline relative shrink-0" data-name="value">
      <p className="font-['Google_Sans_Flex:Medium',sans-serif] font-medium leading-[36px] relative shrink-0 text-[#312e33] text-[24px]" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        1,987
      </p>
      <p className="font-['Google_Sans_Flex:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#76706e] text-[10px]" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        kWh
      </p>
    </div>
  );
}

function TileLeft1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start justify-end not-italic relative shrink-0 whitespace-nowrap" data-name="tile-left">
      <p className="font-['Google_Sans_Flex:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#433f3d] text-[12px]" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        Vacant Energy
      </p>
      <Value1 />
    </div>
  );
}

function TileRight1() {
  return (
    <div className="content-stretch flex flex-col items-end justify-end pb-[10px] relative shrink-0" data-name="tile-right">
      <div className="bg-[rgba(50,193,117,0.1)] content-stretch flex items-center justify-center px-[8px] py-px relative rounded-[10px] shrink-0" data-name="badge">
        <p className="[word-break:break-word] font-['Google_Sans_Flex:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#467855] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
          -9%
        </p>
      </div>
    </div>
  );
}

function Wrapper2() {
  return (
    <div className="relative shrink-0 w-full" data-name="wrapper">
      <div className="flex flex-row items-end justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-end justify-between p-[16px] relative size-full">
          <TileLeft1 />
          <TileRight1 />
        </div>
      </div>
    </div>
  );
}

function Value2() {
  return (
    <div className="content-stretch flex gap-[4px] items-baseline relative shrink-0" data-name="value">
      <p className="font-['Google_Sans_Flex:Medium',sans-serif] font-medium leading-[36px] relative shrink-0 text-[#312e33] text-[24px]" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        1,753
      </p>
      <p className="font-['Google_Sans_Flex:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#76706e] text-[10px]" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        kWh
      </p>
    </div>
  );
}

function TileLeft2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start justify-end not-italic relative shrink-0 whitespace-nowrap" data-name="tile-left">
      <p className="font-['Google_Sans_Flex:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#433f3d] text-[12px]" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        HVAC Energy
      </p>
      <Value2 />
    </div>
  );
}

function TileRight2() {
  return (
    <div className="content-stretch flex flex-col items-end justify-end pb-[10px] relative shrink-0" data-name="tile-right">
      <div className="bg-[rgba(231,74,79,0.1)] content-stretch flex items-center justify-center px-[8px] py-px relative rounded-[10px] shrink-0" data-name="badge">
        <p className="[word-break:break-word] font-['Google_Sans_Flex:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#a8353f] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
          +8%
        </p>
      </div>
    </div>
  );
}

function Wrapper3() {
  return (
    <div className="relative shrink-0 w-full" data-name="wrapper">
      <div className="flex flex-row items-end justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-end justify-between p-[16px] relative size-full">
          <TileLeft2 />
          <TileRight2 />
        </div>
      </div>
    </div>
  );
}

function Value3() {
  return (
    <div className="content-stretch flex gap-[4px] items-baseline relative shrink-0" data-name="value">
      <p className="font-['Google_Sans_Flex:Medium',sans-serif] font-medium leading-[36px] relative shrink-0 text-[#312e33] text-[24px]" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        546
      </p>
      <p className="font-['Google_Sans_Flex:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#76706e] text-[10px]" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        kWh
      </p>
    </div>
  );
}

function TileLeft3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start justify-end not-italic relative shrink-0 whitespace-nowrap" data-name="tile-left">
      <p className="font-['Google_Sans_Flex:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#433f3d] text-[12px]" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        Vacant HVAC Energy
      </p>
      <Value3 />
    </div>
  );
}

function TileRight3() {
  return (
    <div className="content-stretch flex flex-col items-end justify-end pb-[10px] relative shrink-0" data-name="tile-right">
      <div className="bg-[rgba(231,74,79,0.1)] content-stretch flex items-center justify-center px-[8px] py-px relative rounded-[10px] shrink-0" data-name="badge">
        <p className="[word-break:break-word] font-['Google_Sans_Flex:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#a8353f] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
          +12%
        </p>
      </div>
    </div>
  );
}

function Wrapper4() {
  return (
    <div className="relative shrink-0 w-full" data-name="wrapper">
      <div className="flex flex-row items-end justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-end justify-between p-[16px] relative size-full">
          <TileLeft3 />
          <TileRight3 />
        </div>
      </div>
    </div>
  );
}

function Value4() {
  return (
    <div className="content-stretch flex gap-[4px] items-baseline relative shrink-0" data-name="value">
      <p className="font-['Google_Sans_Flex:Medium',sans-serif] font-medium leading-[36px] relative shrink-0 text-[#312e33] text-[24px]" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        258
      </p>
      <p className="font-['Google_Sans_Flex:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#76706e] text-[10px]" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        hrs
      </p>
    </div>
  );
}

function TileLeft4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start justify-end not-italic relative shrink-0 whitespace-nowrap" data-name="tile-left">
      <p className="font-['Google_Sans_Flex:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#433f3d] text-[12px]" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        Total HVAC Runtime
      </p>
      <Value4 />
    </div>
  );
}

function TileRight4() {
  return (
    <div className="content-stretch flex flex-col items-end justify-end pb-[10px] relative shrink-0" data-name="tile-right">
      <div className="bg-[rgba(231,74,79,0.1)] content-stretch flex items-center justify-center px-[8px] py-px relative rounded-[10px] shrink-0" data-name="badge">
        <p className="[word-break:break-word] font-['Google_Sans_Flex:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#a8353f] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
          +7%
        </p>
      </div>
    </div>
  );
}

function Wrapper5() {
  return (
    <div className="relative shrink-0 w-full" data-name="wrapper">
      <div className="flex flex-row items-end justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-end justify-between p-[16px] relative size-full">
          <TileLeft4 />
          <TileRight4 />
        </div>
      </div>
    </div>
  );
}

function Value5() {
  return (
    <div className="content-stretch flex gap-[4px] items-baseline relative shrink-0" data-name="value">
      <p className="font-['Google_Sans_Flex:Medium',sans-serif] font-medium leading-[36px] relative shrink-0 text-[#312e33] text-[24px]" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        45
      </p>
      <p className="font-['Google_Sans_Flex:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#76706e] text-[10px]" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        hrs
      </p>
    </div>
  );
}

function TileLeft5() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start justify-end not-italic relative shrink-0 whitespace-nowrap" data-name="tile-left">
      <p className="font-['Google_Sans_Flex:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#433f3d] text-[12px]" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        Vacant HVAC Runtime
      </p>
      <Value5 />
    </div>
  );
}

function TileRight5() {
  return (
    <div className="content-stretch flex flex-col items-end justify-end pb-[10px] relative shrink-0" data-name="tile-right">
      <div className="bg-[rgba(50,193,117,0.1)] content-stretch flex items-center justify-center px-[8px] py-px relative rounded-[10px] shrink-0" data-name="badge">
        <p className="[word-break:break-word] font-['Google_Sans_Flex:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#467855] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
          -2%
        </p>
      </div>
    </div>
  );
}

function Wrapper6() {
  return (
    <div className="relative shrink-0 w-full" data-name="wrapper">
      <div className="flex flex-row items-end justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-end justify-between p-[16px] relative size-full">
          <TileLeft5 />
          <TileRight5 />
        </div>
      </div>
    </div>
  );
}

function Value6() {
  return (
    <div className="content-stretch flex gap-[4px] items-baseline relative shrink-0" data-name="value">
      <p className="font-['Google_Sans_Flex:Medium',sans-serif] font-medium leading-[36px] relative shrink-0 text-[#312e33] text-[24px]" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        12
      </p>
      <p className="font-['Google_Sans_Flex:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#76706e] text-[10px]" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        hrs
      </p>
    </div>
  );
}

function TileLeft6() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start justify-end not-italic relative shrink-0 whitespace-nowrap" data-name="tile-left">
      <p className="font-['Google_Sans_Flex:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#433f3d] text-[12px]" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        Stage 2 HVAC Runtime
      </p>
      <Value6 />
    </div>
  );
}

function TileRight6() {
  return (
    <div className="content-stretch flex flex-col items-end justify-end pb-[10px] relative shrink-0" data-name="tile-right">
      <div className="bg-[rgba(231,74,79,0.1)] content-stretch flex items-center justify-center px-[8px] py-px relative rounded-[10px] shrink-0" data-name="badge">
        <p className="[word-break:break-word] font-['Google_Sans_Flex:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#a8353f] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
          +10%
        </p>
      </div>
    </div>
  );
}

function Wrapper7() {
  return (
    <div className="relative shrink-0 w-full" data-name="wrapper">
      <div className="flex flex-row items-end justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-end justify-between p-[16px] relative size-full">
          <TileLeft6 />
          <TileRight6 />
        </div>
      </div>
    </div>
  );
}

function Value7() {
  return (
    <div className="content-stretch flex gap-[4px] items-baseline relative shrink-0" data-name="value">
      <p className="font-['Google_Sans_Flex:Medium',sans-serif] font-medium leading-[36px] relative shrink-0 text-[#312e33] text-[24px]" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        8,741
      </p>
      <p className="font-['Google_Sans_Flex:Regular',sans-serif] font-normal leading-[14px] relative shrink-0 text-[#76706e] text-[10px]" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        mins
      </p>
    </div>
  );
}

function TileLeft7() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start justify-end not-italic relative shrink-0 whitespace-nowrap" data-name="tile-left">
      <p className="font-['Google_Sans_Flex:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#433f3d] text-[12px]" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        HVAC Overrides
      </p>
      <Value7 />
    </div>
  );
}

function TileRight7() {
  return (
    <div className="content-stretch flex flex-col items-end justify-end pb-[10px] relative shrink-0" data-name="tile-right">
      <div className="bg-[rgba(50,193,117,0.1)] content-stretch flex items-center justify-center px-[8px] py-px relative rounded-[10px] shrink-0" data-name="badge">
        <p className="[word-break:break-word] font-['Google_Sans_Flex:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#467855] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
          -14%
        </p>
      </div>
    </div>
  );
}

function Wrapper8() {
  return (
    <div className="relative shrink-0 w-full" data-name="wrapper">
      <div className="flex flex-row items-end justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-end justify-between p-[16px] relative size-full">
          <TileLeft7 />
          <TileRight7 />
        </div>
      </div>
    </div>
  );
}

function Wrapper() {
  return (
    <div className="grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(2,fit-content(100%))] relative shrink-0 w-full" data-name="wrapper">
      <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative rounded-tl-[12px] row-1 self-start shrink-0" data-name="tile-trend">
        <div aria-hidden className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-tl-[12px]" />
        <Wrapper1 />
        <div className="absolute right-0 size-[16px] top-0" data-name="cover" />
        <div className="absolute bottom-0 right-0 size-[16px]" data-name="cover" />
        <div className="absolute bottom-0 left-0 size-[16px]" data-name="cover" />
      </div>
      <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="tile-trend">
        <div aria-hidden className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none" />
        <Wrapper2 />
        <div className="absolute right-0 size-[16px] top-0" data-name="cover" />
        <div className="absolute bottom-0 right-0 size-[16px]" data-name="cover" />
        <div className="absolute bottom-0 left-0 size-[16px]" data-name="cover" />
      </div>
      <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="tile-trend">
        <div aria-hidden className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none" />
        <Wrapper3 />
        <div className="absolute right-0 size-[16px] top-0" data-name="cover" />
        <div className="absolute bottom-0 right-0 size-[16px]" data-name="cover" />
        <div className="absolute bottom-0 left-0 size-[16px]" data-name="cover" />
      </div>
      <div className="col-4 content-stretch flex flex-col items-start justify-self-stretch relative rounded-tr-[12px] row-1 self-start shrink-0" data-name="tile-trend">
        <div aria-hidden className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-tr-[12px]" />
        <Wrapper4 />
        <div className="absolute flex h-[62px] items-center justify-center right-0 top-[16px] w-[8px]">
          <div className="-scale-y-100 flex-none">
            <div className="h-[62px] relative w-[8px]" data-name="line-right" />
          </div>
        </div>
        <div className="absolute right-0 size-[16px] top-0" data-name="cover" />
        <div className="absolute bottom-0 right-0 size-[16px]" data-name="cover" />
        <div className="absolute bottom-0 left-0 size-[16px]" data-name="cover" />
      </div>
      <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative rounded-bl-[12px] row-2 self-start shrink-0" data-name="tile-trend">
        <div aria-hidden className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-bl-[12px]" />
        <Wrapper5 />
        <div className="absolute right-0 size-[16px] top-0" data-name="cover" />
        <div className="absolute bottom-0 right-0 size-[16px]" data-name="cover" />
        <div className="absolute bottom-0 left-0 size-[16px]" data-name="cover" />
      </div>
      <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-2 self-start shrink-0" data-name="tile-trend">
        <div aria-hidden className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none" />
        <Wrapper6 />
        <div className="absolute right-0 size-[16px] top-0" data-name="cover" />
        <div className="absolute bottom-0 right-0 size-[16px]" data-name="cover" />
        <div className="absolute bottom-0 left-0 size-[16px]" data-name="cover" />
      </div>
      <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-2 self-start shrink-0" data-name="tile-trend">
        <div aria-hidden className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none" />
        <Wrapper7 />
        <div className="absolute right-0 size-[16px] top-0" data-name="cover" />
        <div className="absolute bottom-0 right-0 size-[16px]" data-name="cover" />
        <div className="absolute bottom-0 left-0 size-[16px]" data-name="cover" />
      </div>
      <div className="col-4 content-stretch flex flex-col items-start justify-self-stretch relative rounded-br-[12px] row-2 self-start shrink-0" data-name="tile-trend">
        <div aria-hidden className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-br-[12px]" />
        <Wrapper8 />
        <div className="absolute flex h-[62px] items-center justify-center right-0 top-[16px] w-[8px]">
          <div className="-scale-y-100 flex-none">
            <div className="h-[62px] relative w-[8px]" data-name="line-right" />
          </div>
        </div>
        <div className="absolute right-0 size-[16px] top-0" data-name="cover" />
        <div className="absolute bottom-0 right-0 size-[16px]" data-name="cover" />
        <div className="absolute bottom-0 left-0 size-[16px]" data-name="cover" />
      </div>
    </div>
  );
}

function Numbers() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[12px] shrink-0 w-full" data-name="numbers">
      <Wrapper />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative">
      <BackgroundBorder4 />
      <Numbers />
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Bold','Noto_Sans:Bold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#456c88] text-[14px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">View all →</p>
      </div>
    </div>
  );
}

function LinkMargin() {
  return (
    <div className="absolute content-stretch flex flex-col items-end min-w-[63.790000915527344px] pl-[152.422px] right-[-0.01px] top-[3.12px] w-[216.212px]" data-name="Link:margin">
      <Link />
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[20px] mb-[-0.01px] relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Google_Sans_Flex:Bold',sans-serif] font-bold justify-center leading-[0] left-0 not-italic text-[#171a20] text-[16px] top-[10px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Active alerts</p>
      </div>
      <LinkMargin />
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col h-[13px] items-start pt-[5px] relative shrink-0 w-[8px]" data-name="Margin">
      <div className="bg-[#a8353f] relative rounded-[99px] shrink-0 size-[8px]" data-name="Background" />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[13.5px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[18.23px]">RTU-2 supply fan failure</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Austin – Lamar Blvd · 38 min ago</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative self-stretch shrink-0 w-[216px]" data-name="Container">
      <Container37 />
      <Container38 />
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#f2bdbf] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex gap-[11.99px] items-start pb-[13.625px] pl-[24px] pt-[13px] relative size-full">
        <Margin2 />
        <Container36 />
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col h-[13px] items-start pt-[5px] relative shrink-0 w-[8px]" data-name="Margin">
      <div className="bg-[#a8353f] relative rounded-[99px] shrink-0 size-[8px]" data-name="Background" />
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[13.5px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[18.23px]">Site controller offline</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Tulsa – Cherry St · 4 h ago</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative self-stretch shrink-0 w-[173px]" data-name="Container">
      <Container40 />
      <Container41 />
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#f2bdbf] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex gap-[11.99px] items-start pb-[13.625px] pl-[24px] pt-[13px] relative size-full">
        <Margin3 />
        <Container39 />
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col h-[13px] items-start pt-[5px] relative shrink-0 w-[8px]" data-name="Margin">
      <div className="bg-[#ed6c02] relative rounded-[99px] shrink-0 size-[8px]" data-name="Background" />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[13.5px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[18.23px]">Zone temp above setpoint 2°+ for 3 h</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Phoenix – Camelback · 3 h ago</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col gap-[1.99px] items-start relative self-stretch shrink-0 w-[242px]" data-name="Container">
      <Container43 />
      <Container44 />
    </div>
  );
}

function HorizontalBorder3() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#e8ab7a] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex gap-[11.99px] items-start pb-[13.625px] pl-[24px] pt-[13px] relative size-full">
        <Margin4 />
        <Container42 />
      </div>
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch flex flex-col h-[13px] items-start pt-[5px] relative shrink-0 w-[8px]" data-name="Margin">
      <div className="bg-[#ed6c02] relative rounded-[99px] shrink-0 size-[8px]" data-name="Background" />
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[13.5px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[18.23px]">RTU-1 runtime 22% above fleet average</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Denver – Cherry Creek · 6 h ago</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col gap-[1.99px] items-start relative self-stretch shrink-0 w-[256px]" data-name="Container">
      <Container46 />
      <Container47 />
    </div>
  );
}

function HorizontalBorder4() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#e8ab7a] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex gap-[11.99px] items-start pb-[13.625px] pl-[24px] pt-[13px] relative size-full">
        <Margin5 />
        <Container45 />
      </div>
    </div>
  );
}

function Margin6() {
  return (
    <div className="content-stretch flex flex-col h-[13px] items-start pt-[5px] relative shrink-0 w-[8px]" data-name="Margin">
      <div className="bg-[#c7d6df] relative rounded-[99px] shrink-0 size-[8px]" data-name="Background" />
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[13.5px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[18.23px]">Filter change due at 4 sites</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Portfolio · today</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col gap-[1.99px] items-start relative self-stretch shrink-0 w-[176px]" data-name="Container">
      <Container50 />
      <Container51 />
    </div>
  );
}

function Container48() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#85a6c0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex gap-[11.99px] items-start pl-[24px] py-[13px] relative size-full">
        <Margin6 />
        <Container49 />
      </div>
    </div>
  );
}

function Margin7() {
  return (
    <div className="content-stretch flex flex-col h-[13px] items-start pt-[5px] relative shrink-0 w-[8px]" data-name="Margin">
      <div className="bg-[#a8353f] relative rounded-[99px] shrink-0 size-[8px]" data-name="Background" />
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[13.5px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[18.23px]">RTU-2 supply fan failure</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Austin – Lamar Blvd · 38 min ago</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative self-stretch shrink-0 w-[216px]" data-name="Container">
      <Container53 />
      <Container54 />
    </div>
  );
}

function HorizontalBorder5() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#ef9194] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex gap-[11.99px] items-start pb-[13.625px] pl-[24px] pt-[13px] relative size-full">
        <Margin7 />
        <Container52 />
      </div>
    </div>
  );
}

function Margin8() {
  return (
    <div className="content-stretch flex flex-col h-[13px] items-start pt-[5px] relative shrink-0 w-[8px]" data-name="Margin">
      <div className="bg-[#a8353f] relative rounded-[99px] shrink-0 size-[8px]" data-name="Background" />
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[13.5px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[18.23px]">Site controller offline</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Tulsa – Cherry St · 4 h ago</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative self-stretch shrink-0 w-[173px]" data-name="Container">
      <Container56 />
      <Container57 />
    </div>
  );
}

function HorizontalBorder6() {
  return (
    <div className="bg-[rgba(239,145,148,0.1)] relative rounded-[12px] shrink-0 w-full" data-name="HorizontalBorder">
      <div className="content-stretch flex gap-[11.99px] items-start pb-[13.625px] pl-[24px] pt-[13px] relative size-full">
        <Margin8 />
        <Container55 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <HorizontalBorder1 />
      <HorizontalBorder2 />
      <HorizontalBorder3 />
      <HorizontalBorder4 />
      <Container48 />
      <HorizontalBorder5 />
      <HorizontalBorder6 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Margin">
      <div className="content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <Container35 />
      </div>
    </div>
  );
}

function BackgroundBorder5() {
  return (
    <div className="bg-white h-[499px] relative rounded-[12px] shrink-0 w-[360px]" data-name="Background+Border">
      <div className="content-stretch flex flex-col items-start overflow-clip px-[24.625px] py-[22.625px] relative rounded-[inherit] size-full">
        <Container34 />
        <Margin1 />
      </div>
      <div aria-hidden className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex gap-[15.99px] items-start relative shrink-0 w-full" data-name="Container">
      <Frame4 />
      <BackgroundBorder5 />
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-0.001px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Sites needing attention</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Bold','Noto_Sans:Bold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Bold','Noto_Sans_Symbols2:Regular',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#456c88] text-[14px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">All 48 sites →</p>
      </div>
    </div>
  );
}

function Margin9() {
  return (
    <div className="flex-[1_0_0] min-w-[83.16999816894531px] relative" data-name="Margin">
      <div className="flex flex-col items-end min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end min-w-[inherit] pl-[823.711px] relative size-full">
          <Container60 />
        </div>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex items-center pb-[10px] pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Container59 />
      <Margin9 />
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[376px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#201d1c] text-[11px] tracking-[1.54px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Site</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#201d1c] text-[11px] tracking-[1.54px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Status</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#201d1c] text-[11px] tracking-[1.54px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Inside temp</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#201d1c] text-[11px] tracking-[1.54px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Setpoint</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#201d1c] text-[11px] tracking-[1.54px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Energy today</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#201d1c] text-[11px] tracking-[1.54px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Energy today</p>
      </div>
    </div>
  );
}

function HorizontalBorder7() {
  return (
    <div className="bg-[#c7d6df] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#e8e8e8] border-b-[0.625px] border-solid inset-0 pointer-events-none rounded-tl-[12px] rounded-tr-[12px]" />
      <div className="content-stretch flex items-start p-[8px] relative size-full">
        <Container61 />
        <Container62 />
        <Container63 />
        <Container64 />
        <Container65 />
        <Container66 />
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Austin – Lamar Blvd</p>
      </div>
    </div>
  );
}

function Typography() {
  return (
    <div className="content-stretch flex flex-col items-start px-[6px] relative shrink-0" data-name="Typography">
      <p className="[word-break:break-word] font-['Google_Sans_Flex:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#a8353f] text-[13px] tracking-[0.16px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        Fault
      </p>
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex items-center px-[4px] py-[3px] relative rounded-[16px] shrink-0" data-name="Container">
      <Typography />
    </div>
  );
}

function Container68() {
  return (
    <div className="col-2 content-stretch flex h-[17.5px] items-center justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="bg-[rgba(231,74,79,0.1)] content-stretch flex flex-col items-start relative rounded-[12px] shrink-0" data-name="Chip">
        <Container69 />
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">78.4°F</p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="col-4 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">74°F</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="col-5 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">1,240 kWh</p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="col-6 content-stretch flex flex-col items-end justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">3</p>
      </div>
    </div>
  );
}

function HorizontalBorder8() {
  return (
    <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[______minmax(0,2.20fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.20fr)_minmax(0,0.80fr)] grid-rows-[_17.50px] h-[46.11px] pb-[14.625px] pt-[14px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#e8e8e8] border-b-[0.625px] border-solid inset-0 pointer-events-none" />
      <Container67 />
      <Container68 />
      <Container70 />
      <Container71 />
      <Container72 />
      <Container73 />
    </div>
  );
}

function Container74() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Tulsa – Cherry St</p>
      </div>
    </div>
  );
}

function Typography1() {
  return (
    <div className="content-stretch flex flex-col items-start px-[6px] relative shrink-0" data-name="Typography">
      <p className="[word-break:break-word] font-['American_Grotesk:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#312e33] text-[13px] tracking-[0.16px] whitespace-nowrap">Offline</p>
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex items-center px-[4px] py-[3px] relative rounded-[16px] shrink-0" data-name="Container">
      <Typography1 />
    </div>
  );
}

function Container75() {
  return (
    <div className="col-2 content-stretch flex h-[17.5px] items-center justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="bg-[#e0e0e0] content-stretch flex flex-col items-start relative rounded-[12px] shrink-0" data-name="Chip">
        <Container76 />
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">—</p>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="col-4 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">—</p>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="col-5 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">—</p>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="col-6 content-stretch flex flex-col items-end justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function HorizontalBorder9() {
  return (
    <div className="bg-[#f8f8f8] gap-x-[12px] gap-y-[12px] grid grid-cols-[______minmax(0,2.20fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.20fr)_minmax(0,0.80fr)] grid-rows-[_17.50px] h-[46.11px] pb-[14.625px] pt-[14px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#e8e8e8] border-b-[0.625px] border-solid inset-0 pointer-events-none" />
      <Container74 />
      <Container75 />
      <Container77 />
      <Container78 />
      <Container79 />
      <Container80 />
    </div>
  );
}

function Container81() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Phoenix – Camelback</p>
      </div>
    </div>
  );
}

function Typography2() {
  return (
    <div className="content-stretch flex flex-col items-start px-[6px] relative shrink-0" data-name="Typography">
      <p className="[word-break:break-word] font-['American_Grotesk:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#985014] text-[13px] tracking-[0.16px] whitespace-nowrap">Warning</p>
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex items-center px-[4px] py-[3px] relative rounded-[16px] shrink-0" data-name="Container">
      <Typography2 />
    </div>
  );
}

function Container82() {
  return (
    <div className="col-2 content-stretch flex h-[17.5px] items-center justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="bg-[rgba(237,108,2,0.1)] content-stretch flex flex-col items-start relative rounded-[12px] shrink-0" data-name="Chip">
        <Container83 />
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">76.8°F</p>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="col-4 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">74°F</p>
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="col-5 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">1,486 kWh</p>
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="col-6 content-stretch flex flex-col items-end justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function HorizontalBorder10() {
  return (
    <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[______minmax(0,2.20fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.20fr)_minmax(0,0.80fr)] grid-rows-[_17.50px] h-[46.11px] pb-[14.625px] pt-[14px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#e8e8e8] border-b-[0.625px] border-solid inset-0 pointer-events-none" />
      <Container81 />
      <Container82 />
      <Container84 />
      <Container85 />
      <Container86 />
      <Container87 />
    </div>
  );
}

function Container88() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Denver – Cherry Creek</p>
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="col-2 content-stretch flex gap-[8px] h-[17.5px] items-center justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="bg-[#ed6c02] relative rounded-[99px] shrink-0 size-[8px]" data-name="Background" />
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Warning</p>
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">71.9°F</p>
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="col-4 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">71°F</p>
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="col-5 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">1,102 kWh</p>
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="col-6 content-stretch flex flex-col items-end justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function HorizontalBorder11() {
  return (
    <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[______minmax(0,2.20fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.20fr)_minmax(0,0.80fr)] grid-rows-[_17.50px] h-[46.11px] pb-[14.625px] pt-[14px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#e8e8e8] border-b-[0.625px] border-solid inset-0 pointer-events-none" />
      <Container88 />
      <Container89 />
      <Container90 />
      <Container91 />
      <Container92 />
      <Container93 />
    </div>
  );
}

function Container95() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Dallas – Preston Rd</p>
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="col-2 content-stretch flex gap-[8px] h-[17.5px] items-center justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="bg-[#467855] relative rounded-[99px] shrink-0 size-[8px]" data-name="Background" />
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">Normal</p>
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">72.1°F</p>
      </div>
    </div>
  );
}

function Container98() {
  return (
    <div className="col-4 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">72°F</p>
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="col-5 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5e62] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">968 kWh</p>
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="col-6 content-stretch flex flex-col items-end justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Google_Sans_Flex:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#171a20] text-[14px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "ROND" 0, "wdth" 100' }}>
        <p className="leading-[normal]">0</p>
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[______minmax(0,2.20fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.20fr)_minmax(0,0.80fr)] grid-rows-[_17.50px] h-[45.49px] py-[14px] relative shrink-0 w-full" data-name="Container">
      <Container95 />
      <Container96 />
      <Container97 />
      <Container98 />
      <Container99 />
      <Container100 />
    </div>
  );
}

function BackgroundBorder6() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e8e8e8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start pb-[12.625px] pt-[8.625px] px-[24.625px] relative size-full">
        <Container58 />
        <HorizontalBorder7 />
        <HorizontalBorder8 />
        <HorizontalBorder9 />
        <HorizontalBorder10 />
        <HorizontalBorder11 />
        <Container94 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[20px] items-start px-[28px] py-[26px] relative size-full">
        <Frame5 />
        <Container18 />
        <Container29 />
        <BackgroundBorder6 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[994.28px] items-start min-w-px relative" data-name="Container">
      <Container17 />
    </div>
  );
}

function Page() {
  return (
    <div className="content-stretch flex items-start relative rounded-[64px] shrink-0 w-full" data-name="Page">
      <div className="bg-[#171a20] content-stretch flex flex-col h-[960px] items-start relative shrink-0 w-[58px]" data-name="Sidenav">
        <IconButton />
        <IconButton1 />
        <Ul />
      </div>
      <Container16 />
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