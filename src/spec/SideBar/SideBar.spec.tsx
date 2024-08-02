import { render, screen } from "@testing-library/react";

import SideBar from "../../components/SideBar/SideBar.tsx";

beforeEach(() => {
  render(<SideBar />);
});

describe("SideBar 컴포넌트 테스트", () => {
  it("사이드바에 '전체', '집업' 이라는 글자가 렌더링 되어야 합니다.", () => {
    const SideBarAllEl = screen.getByText("전체");
    const SideBarZipUpEl = screen.getByText("집업");

    expect(SideBarAllEl).toBeInTheDocument();
    expect(SideBarZipUpEl).toBeInTheDocument();
  });

  it("사이드바에 'FILTER와', '브랜드', '시즌' 이라는 글자가 렌더링 되어야 합니다.", () => {
    const FilterEl = screen.getByText("FILTER");
    const BrandEl = screen.getByText("브랜드");
    const SeasonEl = screen.getByText("시즌");

    expect(FilterEl).toBeInTheDocument;
    expect(BrandEl).toBeInTheDocument;
    expect(SeasonEl).toBeInTheDocument;
  });
});
