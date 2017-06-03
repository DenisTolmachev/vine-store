
var App = React.createClass({
    showLeft: function() {
        this.refs.left.show();
    },

    render: function() {
        return <div>
            <button className="slider-menu-button" onClick={this.showLeft}>Menu</button>
            
            <Menu ref="left" alignment="left">
                <MenuItem href="../index.html">главная</MenuItem>
                <MenuItem hash="../pages/catalog.html">каталог</MenuItem>
                <MenuItem hash="../pages/about-us.html">о нас</MenuItem>
                <MenuItem href="../pages/news.html">новости</MenuItem>
                <MenuItem hash="../pages/contacts.html">контакты</MenuItem>
                <MenuItem hash="../pages/cart.html">корзина</MenuItem>
                <MenuItem hash="log-in">вход</MenuItem>
                <MenuItem hash="register">регистрация</MenuItem>
            </Menu>
            
        </div>;
    }
});

var Menu = React.createClass({
    getInitialState: function() {
        return {
            visible: false
        };
    },

    show: function() {
        this.setState({ visible: true });
        document.addEventListener("click", this.hide.bind(this));
    },

    hide: function() {
        document.removeEventListener("click", this.hide.bind(this));
        this.setState({ visible: false });
    },

    render: function() {
        return <div className="menu">
            <div className={(this.state.visible ? "visible " : "") + this.props.alignment}>{this.props.children}</div>
        </div>;
    }
});

var MenuItem = React.createClass({
    navigate: function(href) {
        window.location.href = href;
    },

    render: function() {
        return <div className="menu-item" onClick={this.navigate.bind(this, this.props.href)}>{this.props.children}</div>;
    }
});

ReactDOM.render(<App />, document.getElementById('sliding-menu'));
		