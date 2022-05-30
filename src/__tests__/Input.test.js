import { render, screen } from "@testing-library/react";
import { Input } from "../components/Input";

describe("Input", () => {
    test("input must work with class name and variant", () => {
        render(<Input type="text" size="md" variant="filled" />);
        const input = screen.getByTestId("inputTest");
        expect(input).toHaveAttribute("class", "input md filled");
    });
    test("testing if type is missing", () => {
        render(<Input size="md" variant="outline" />);
        const input = screen.getByTestId("inputTest");
        expect(input).toHaveAttribute("type", "text");
    });
    test("testing if size is missing", () => {
        render(<Input type="text" variant="outline" />);
        const input = screen.getByTestId("inputTest");
        expect(input).toHaveAttribute("class", "input md outline");
    });
    test("testing if variant is missing", () => {
        render(<Input type="text" size="xl" />);
        const input = screen.getByTestId("inputTest");
        expect(input).toHaveAttribute("class", "input xl outline");
    });
});
