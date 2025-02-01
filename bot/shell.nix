{ pkgs ? import <nixpkgs> {} }:

let
  darwin = pkgs.darwin.apple_sdk.frameworks;
in
pkgs.mkShell {
  # Rust toolchain
  nativeBuildInputs = with pkgs; [
		rustup
    cargo
    pkg-config
    openssl
		libiconv
  ] ++ (if pkgs.stdenv.isDarwin then [
    darwin.SystemConfiguration # Add SystemConfiguration framework
  ] else []);

  # Environment variables for Supabase
  SUPABASE_URL = "your-supabase-url";
  SUPABASE_API_KEY = "your-supabase-api-key";

  # Optional: Use `dotenv` to load environment variables from a `.env` file
  shellHook = ''
    export SUPABASE_URL=$(grep SUPABASE_URL .env | cut -d '=' -f2)
    export SUPABASE_API_KEY=$(grep SUPABASE_API_KEY .env | cut -d '=' -f2)
	  rustup install stable # Install the stable toolchain
    rustup default stable # Set stable as the default toolchain
  '';
}
