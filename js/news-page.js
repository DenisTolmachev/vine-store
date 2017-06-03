var added_news = [
    {
        image: '../img/grapes2.png',
        title: 'победа на выставке 1',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget libero ut nunc eleifend blandit. Etiam a ultricies ligula, et ultrices neque. '
    },
    {
        image: '../img/grapes2.png',
        title: 'победа на выставке 2',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget libero ut nunc eleifend blandit. Etiam a ultricies ligula, et ultrices neque. '
    },
    {
        image: '../img/grapes2.png',
        title: 'победа на выставке 3',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget libero ut nunc eleifend blandit. Etiam a ultricies ligula, et ultrices neque. '
    },
    {
        image: '../img/grapes2.png',
        title: 'победа на выставке 4',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget libero ut nunc eleifend blandit. Etiam a ultricies ligula, et ultrices neque. '
    }
];

var Article = React.createClass ({
    propTypes: {
        data: React.PropTypes.shape({
            title: React.PropTypes.string.isRequired,
            text: React.PropTypes.string.isRequired
        })
    },
    render: function () {
        var image = this.props.data.image,
            author = this.props.data.title,
            text = this.props.data.text;

        return (
            <div className="article">
                <div className="news__image">
                    <img src={image} />
                </div>
                <div className="news__post">
                    <p className="news__author">{author}:</p>
                    <p className="news_text">{text}: </p>
                </div>
            </div>
        )
    }
});

var News = React.createClass({
    propTypes: {
        data: React.PropTypes.array.isRequired
    },
    render: function () {
        var data = this.props.data;
        var newsTemplate;

        if (data.length > 0) {
            newsTemplate = data.map(function (item, index) {
                return (
                    <div key={index}>
                        <Article data={item} />
                    </div>
                )
            })
        }
        else {
            newsTemplate = <p>Новостей нет</p>
        }
        return (
            <div className="news">
                {newsTemplate}
                <strong className={'news__count ' + (data.length > 0 ? '':'none')}>Всего новостей: {data.length}</strong>
            </div>
        )
    }
});

var NewsApp = React.createClass({
    render: function () {
        return (
            <div className="app">
                <News data={added_news}/>
            </div>
        );
    }
});

ReactDOM.render(
    <NewsApp />,
    document.getElementById('news_app')
);
