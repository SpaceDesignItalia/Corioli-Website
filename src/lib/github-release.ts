const GITHUB_REPO = "SpaceDesignItalia/Corioli";
const RELEASES_URL = `https://api.github.com/repos/${GITHUB_REPO}/releases/latest`;

type GitHubReleaseAsset = {
  name: string;
  browser_download_url: string;
};

type GitHubRelease = {
  tag_name: string;
  name: string;
  assets: GitHubReleaseAsset[];
};

export type WindowsReleaseInfo = {
  url: string;
  version: string;
  tag: string;
};

function pickWindowsInstaller(assets: GitHubReleaseAsset[]): GitHubReleaseAsset | undefined {
  return assets.find(
    (asset) =>
      asset.name.endsWith(".exe") && !asset.name.endsWith(".exe.blockmap"),
  );
}

export async function getLatestWindowsRelease(): Promise<WindowsReleaseInfo | null> {
  const response = await fetch(RELEASES_URL, {
    headers: {
      Accept: "application/vnd.github+json",
      "User-Agent": "Corioli-Website",
    },
    next: { revalidate: 300 },
  });

  if (!response.ok) {
    return null;
  }

  const release = (await response.json()) as GitHubRelease;
  const installer = pickWindowsInstaller(release.assets);

  if (!installer) {
    return null;
  }

  return {
    url: installer.browser_download_url,
    version: release.name || release.tag_name.replace(/^v/, ""),
    tag: release.tag_name,
  };
}
