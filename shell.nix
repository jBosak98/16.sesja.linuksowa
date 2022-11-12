
with (import (builtins.fetchTarball {
  name = "nixos-19.09";
  url = "https://github.com/NixOS/nixpkgs/archive/refs/tags/19.09.tar.gz";
  sha256 = "0mhqhq21y5vrr1f30qd2bvydv4bbbslvyzclhw0kdxmkgg3z4c92";
}) {});
let
  stable = (import (builtins.fetchTarball {
  name = "nixos-21.11";
  url = "https://github.com/NixOS/nixpkgs/archive/refs/tags/21.11.tar.gz";
  sha256 = "162dywda2dvfj1248afxc45kcrg83appjd0nmdb541hl7rnncf02";
}) {});
  gems = stable.bundlerEnv {
    name = "sesja.linuksowa";
    inherit ruby;
    gemdir = ./.;
  };
in stdenv.mkDerivation {
  name = "sesja.linuksowa";
  buildInputs = [gems ruby];
}