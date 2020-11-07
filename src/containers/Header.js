import { connect } from 'react-redux';
import Header from 'src/components/Header';
import { logout } from 'src/actions/user';

const mapStateToProps = (state) => ({
  user: state.user.user,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch(logout());
  },
});

// Container
const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
