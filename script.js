<script>
  let cart = [];

  function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${name} has been added to your cart!`);
    updateCartCount();
  }

  function updateCartCount() {
    const count = cart.length;
    const cartCount = document.getElementById("cart-count");
    if(cartCount) cartCount.textContent = count;
  }

  // Sayfa yüklendiğinde cart sayısını güncelle
  window.onload = () => {
    if(localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
      updateCartCount();
    }
  };
</script>
