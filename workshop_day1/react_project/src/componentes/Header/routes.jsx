import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import IconWithBadge from "./iconWithBadge";

const routes = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/categories", label: "Categories" },
  { href: "/addProduct", label: "Add Product" },
  { href: "/about", label: "About" },
  {
    href: "/cart",
    label: (
      <IconWithBadge icon={'cart'}>
        <ShoppingCartIcon sx={{ height: "20px" }} />,
      </IconWithBadge>
    ),
  },
  {
    href: "/fav",
    label: (
      <IconWithBadge icon={'fav'}>
        <BookmarkIcon sx={{ height: "20px" }} />
      </IconWithBadge>
    ),
  },
];

export default routes;
