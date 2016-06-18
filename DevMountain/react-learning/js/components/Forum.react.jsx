/**
 * Created by cjpowers on 6/16/16.
 */
var Forum = React.createClass({

    getInitialState: function() {

        return {
            allAnswers: {
                "1": {
                    body: "Isn't that about time travel?",
                    correct: false
                },
                "2": {
                    body: "A tool and methodology for building the front end of web applications",
                    correct: false
                },
                "3": {
                    body: "React is a synonym for respond",
                    correct: false
                }
            }
        }
    },

    render: function() {
        return (
            <div>
                <ForumHeader />

                <div className="container">
                    <ForumQuestion />
                    <hr />
                    <ForumAnswers allAnswers={ this.state.allAnswers} />
                    <hr />
                    <h4>Add an answer</h4>
                    <ForumAddAnswerBox />
                </div>
            </div>
        );




        // React.createElement(
        //     'div',
        //     null,
        //     React.createElement(
        //         ForumHeader,
        //         {allAnswers: this.state.allAnswers}
        //     )
        //
        // );
    }
})