const Navbar = () => {
  return (
    <nav class="flex justify-between items-center py-4 px-6 shadow-sm bg-[#F7EFE5] sticky top-0">
      <h1 class="text-xl font-bold text-[#4A3F35]">Jaipur Tourism</h1>

      <ul class="flex gap-6 text-[#4A3F35]">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/places">Places</a>
        </li>
        <li>
          <a href="/food">Food</a>
        </li>
        <li>
          <a href="/transport">Transport</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
