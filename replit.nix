{ pkgs }: {
	deps = [
   pkgs.github-release
   pkgs.github-desktop
   pkgs.perlPackages.Git
		pkgs.nodejs-18_x
    pkgs.nodePackages.typescript-language-server
    pkgs.yarn
    pkgs.replitPackages.jest
	];
}