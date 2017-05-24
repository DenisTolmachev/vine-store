/**
 * Created by Регион on 22.05.2017.
 */


var App = React.createClass({
    showLeft: function() {
        this.refs.left.show();
    },

    render: function() {
        return <div>
            <button className="slider-menu-button" onClick={this.showLeft}>Menu</button>
            
            <Menu ref="left" alignment="left">
                <MenuItem hash="first-page">First Page</MenuItem>
                <MenuItem hash="second-page">Second Page</MenuItem>
                <MenuItem hash="third-page">Third Page</MenuItem>
                <MenuItem hash="third-page">Third Page</MenuItem>
                <MenuItem hash="third-page">Third Page</MenuItem>
                <MenuItem hash="third-page">Third Page</MenuItem>
                <MenuItem hash="third-page">Third Page</MenuItem>
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
    navigate: function(hash) {
        window.location.hash = hash;
    },

    render: function() {
        return <div className="menu-item" onClick={this.navigate.bind(this, this.props.hash)}>{this.props.children}</div>;
    }
});

ReactDOM.render(<App />, document.getElementById('sliding-menu'));
		