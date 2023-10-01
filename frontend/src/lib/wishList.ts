import { BACKEND_URL } from "@/constants/url";
import { fetchAllListings } from "./listing";
import { User } from "@/types/user";

export async function addToWishList(listingID: string) {
  let userStr = window.localStorage.getItem("user");
  if (!userStr) return;
  let user = JSON.parse(userStr) as User;
  const res = await fetch(`${BACKEND_URL}/api/wishlist`, {
    method: "POST",
    body: JSON.stringify({ listingID, userID: user.userID }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (res.status === 200) return;
  throw new Error("Failed to add to wishlist");
}

export async function removeFromWishList(listingID: string) {
  let userStr = window.localStorage.getItem("user");
  if (!userStr) return;
  let user = JSON.parse(userStr) as User;
  const res = await fetch(`${BACKEND_URL}/api/wishlist`, {
    method: "DELETE",
    body: JSON.stringify({ listingID, userID: user.userID }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (res.status === 200) return;
  throw new Error("Failed to remove from wishlist");
}
