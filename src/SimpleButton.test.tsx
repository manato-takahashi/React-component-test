import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SimpleButton } from './SimpleButton';

test("ボタンをクリックするとON/OFFの表示が切り替わる", async () => {
    const user = userEvent.setup();
    // ボタンを描画
    render(<SimpleButton />);
    // ボタンを取得し、最初の表示がOFFであることを確認
    const simpleButton = screen.getByRole("button");
    expect(simpleButton).toHaveTextContent("OFF");
    // ボタンをクリックし、表示がONに切り替わることを確認
    await user.click(simpleButton);
    expect(simpleButton).toHaveTextContent("ON");
});

test("描画されてすぐはOFFと表示されている", () => {
    const view = render(<SimpleButton />);
    expect(view.container).toMatchSnapshot();
});