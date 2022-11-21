import { LinkContainer, Link } from "components/Notices/NoticesCategoryNav/NoticesCategoryNav.styled";

const NoticesCategoriesNav = () => {

    return (
        <LinkContainer className="nav-block">
            <Link to='lost-found'>Lost/found</Link>
            <Link to="for-free">In good hands</Link>
            <Link to="sell">Sell</Link>
        </LinkContainer> 
    )
}

export default NoticesCategoriesNav
