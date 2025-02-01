{ pkgs ? import <nixpkgs> {} }:

pkgs.rustPlatform.buildRustPackage {
  pname = "belanjaku";
  version = "0.1.0";

  src = ./.;

  cargoSha256 = "0000000000000000000000000000000000000000000000000000"; # Replace with the actual hash after first build

  nativeBuildInputs = with pkgs; [
    pkg-config
    openssl
		libconv
  ]++ (if pkgs.stdenv.isDarwin then [
    darwin.SystemConfiguration # Add SystemConfiguration framework
  ] else []);

  # Environment variables for Supabase
  SUPABASE_URL = "your-supabase-url";
  SUPABASE_API_KEY = "your-supabase-api-key";
}
