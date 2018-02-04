var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodzieju',
        poster: './img/harry-potter.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        poster: './img/king-lion.jpg'
    },
    {
        id: 3,
        title: 'Pulp Fiction',
        desc: 'Przgody gangstera Vincenta Vegi',
        poster: './img/pulp-fiction.jpg'
    },
    {
        id: 4,
        title: 'Terminator',
        desc: 'Elektroniczny morderca',
        poster: './img/terminator.jpg'
    }
];

var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },
    render: function() {
        return (React.createElement('li', {},
            React.createElement(MovieTitle, {title: this.props.movie.title}),
            React.createElement(MovieDescription, {desc: this.props.movie.desc}),
            React.createElement(MoviePoster, {poster: this.props.movie.poster})
        ));
    }
});

var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
    },
    render: function() {
        return React.createElement('h2', {}, this.props.title);
    }
});

var MovieDescription = React.createClass({
    propTypes: {
        desc: React.PropTypes.string.isRequired
    },
    render: function() {
        return React.createElement('p', {}, this.props.desc);
    }
});

var MoviePoster = React.createClass({
    propTypes: {
        poster: React.PropTypes.string.isRequired
    },
    render: function() {
        return React.createElement('img', {src: this.props.poster});
    }
});

var moviesElements = movies.map(function(movie) {
    return React.createElement(Movie, {key:movie.id, movie: movie});
});

var MovieList = React.createClass({
    render: function() {
        return React.createElement('ul', {}, moviesElements);
    }
});

var element = React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement(MovieList, {})
);

ReactDOM.render(element, document.getElementById('app'));