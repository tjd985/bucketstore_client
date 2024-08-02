import { render, screen } from "@testing-library/react";

import Header from "../../components/Header/Header.tsx";

beforeEach(() => {
  render(<Header />);
});

describe("Header 컴포넌트 테스트", () => {
  it("헤더에 '올림픽 미리보기', '아울렛' 이라는 글자가 렌더링 되어야 합니다.", () => {
    const HeaderOlympicEl = screen.getByText("올림픽 미리보기");
    const HeaderOutletEl = screen.getByText("아울렛");

    expect(HeaderOlympicEl).toBeInTheDocument();
    expect(HeaderOutletEl).toBeInTheDocument();
  });
});
