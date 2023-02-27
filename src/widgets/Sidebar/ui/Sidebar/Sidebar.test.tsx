import {fireEvent, screen} from "@testing-library/react";
import {renderWithTranslation} from "shared/lib/tests/renderWithTranslation/renderWithTranslation";
import {Sidebar} from "./Sidebar";

describe('Sidebar', () => {
    test('Button', () => {
        renderWithTranslation(<Sidebar/>)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

    test('Toggle sidebar', () => {
        renderWithTranslation(<Sidebar/>)
        const toggleButton = screen.getByTestId('sidebar-toggle')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(toggleButton)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
})
