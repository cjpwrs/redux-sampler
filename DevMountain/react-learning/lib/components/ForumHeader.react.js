/**
 * Created by cjpowers on 6/16/16.
 */
var ForumHeader = React.createClass({
    displayName: "ForumHeader",


    render: function () {

        console.log(this.props.allAnswers);
        return React.createElement(
            "nav",
            { className: "navbar navbar-default" },
            React.createElement(
                "div",
                { className: "container-fluid" },
                React.createElement(
                    "div",
                    { className: "navbar-header" },
                    React.createElement(
                        "a",
                        { className: "navbar-brand", href: "#" },
                        "React Forum"
                    )
                )
            )
        );

        // return React.createElement(
        //     "nav", {
        //         className: "navbar navbar-default"
        //     },
        //     React.createElement(
        //         "div", {
        //             className: "container-fluid"
        //         },
        //         React.createElement(
        //             "div", {
        //                 className: "navbar-header"
        //             },
        //             React.createElement(
        //                 "a", {
        //                     className: "navbar-brand",
        //                     href: "#"
        //                 },
        //                 "React Forum"
        //             )
        //         )
        //     )
        // )
    }
});