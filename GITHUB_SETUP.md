# Private GitHub Setup for Ian Harvey

This project is prepared for a private GitHub repository owned by Ian Harvey using `irharveyfs@gmail.com`.

Credentials should not be committed to this repository. Keep passwords, personal access tokens, and SSH private keys in Ian's macOS Keychain, GitHub CLI, or SSH agent.

## 1. Create Ian's Free GitHub Account

1. Go to <https://github.com/signup>.
2. Use the email address `irharveyfs@gmail.com`.
3. Choose a username and strong password.
4. Select the free personal account plan.
5. Verify the email address when GitHub sends the verification message.

GitHub's account setup docs: <https://docs.github.com/get-started/quickstart/creating-an-account-on-github>

## 2. Create a Private Repository

1. While signed in as Ian, go to <https://github.com/new?visibility=private>.
2. Name the repository `gsl-elevation-simulator`.
3. Set visibility to `Private`.
4. Do not add a README, `.gitignore`, or license on GitHub. This local repository already has those files.
5. Create the repository.

GitHub's repository creation docs: <https://docs.github.com/articles/creating-a-new-repository>

## 3. Set Up Credentials on Ian's Personal Mac

SSH is the cleanest option for personal use.

```bash
git config --global user.name "Ian Harvey"
git config --global user.email "irharveyfs@gmail.com"
ssh-keygen -t ed25519 -C "irharveyfs@gmail.com"
eval "$(ssh-agent -s)"
ssh-add --apple-use-keychain ~/.ssh/id_ed25519
pbcopy < ~/.ssh/id_ed25519.pub
```

Then open GitHub, go to Settings -> SSH and GPG keys -> New SSH key, and paste the copied public key.

Test the connection:

```bash
ssh -T git@github.com
```

GitHub's SSH docs:

- <https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent>
- <https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account>

## 4. Link This Local Project and Upload It

Replace `IAN_USERNAME` with Ian's GitHub username:

```bash
git remote add origin git@github.com:IAN_USERNAME/gsl-elevation-simulator.git
git push -u origin main
```

If `origin` already exists, use:

```bash
git remote set-url origin git@github.com:IAN_USERNAME/gsl-elevation-simulator.git
git push -u origin main
```

## 5. Keep It Private

After upload, confirm repository visibility in GitHub under Settings -> General -> Danger Zone -> Change repository visibility. It should say `Private`.

Do not enable GitHub Pages for this private project unless Ian intentionally wants a public website or has a paid plan that supports private-repository Pages publishing.

GitHub Pages availability docs: <https://docs.github.com/en/pages/quickstart>

