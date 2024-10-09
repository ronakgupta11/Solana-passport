import { Menu } from '@headlessui/react';
import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function FooterPage() {
  return (
<footer class="bg-black text-gray-200 py-6 border-t">
  <div class="container mx-auto px-4">
    <div class="flex flex-col md:flex-row justify-between items-center">
      <div class="mb-4 md:mb-0">
        <h3 class="text-lg font-semibold">Solana Passport</h3>
        <p class="text-sm">Building trust in the digital economy.</p>
      </div>
      <div class="flex space-x-4">
        <a href="#" class="hover:text-blue-400">About</a>
        <a href="#" class="hover:text-blue-400">Privacy Policy</a>
        <a href="#" class="hover:text-blue-400">Terms of Service</a>
        <a href="#" class="hover:text-blue-400">Contact Us</a>
      </div>
    </div>
    <div class="mt-4 text-center">
      <p class="text-sm">© 2024 Solana Passport. All rights reserved.</p>
    </div>
  </div>
</footer>

  );
}
