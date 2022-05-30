import { render, screen } from "@testing-library/react";
import { Image } from "../components/Image";

describe("Image", () => {
    test("Image must have source and alt", () => {
        render(
            <Image
                src="https://images.unsplash.com/photo-1496440737103-cd596325d314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                alt="image"
                borderRadius="10px"
                width="100px"
                height="200px"
                fit="fit"
            />
        );
        const image = screen.getByRole("img");
        expect(image).toHaveAttribute(
            "src",
            "https://images.unsplash.com/photo-1496440737103-cd596325d314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
        );
        expect(image).toHaveAttribute("alt", "image");
    });
    test("Image must have proper styling", () => {
        render(
            <Image
                src="https://images.unsplash.com/photo-1496440737103-cd596325d314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                alt="image"
                borderRadius="10px"
                width="100px"
                height="200px"
                fit="fit"
            />
        );
        const image = screen.getByRole("img");
        const style = window.getComputedStyle(image);
        expect(style.borderRadius).toBe("10px");
        expect(style.width).toBe("100px");
        expect(style.height).toBe("200px");
        expect(style.objectFit).toBe("fit");
    });
});
