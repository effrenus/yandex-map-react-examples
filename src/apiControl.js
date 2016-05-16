
export default function create (ymaps) {
    const ButtonLayout = ymaps.templateLayoutFactory.createClass(
        "<button class='my-button {% if state.selected %}my-button-selected{% endif %}'>" +
            "{{data.content}}" +
        "</button>"
    );

    return new ymaps.control.Button({
        data: {
            content: "Press button"
        },
        options: {
            layout: ButtonLayout
        }
    });
}