## Contributing to the spellbook

You want to contribute to the project? Awesome!

### Things to know

This project adheres to the Contributor Covenant [code of conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to [tre@trezy.com](mailto:tre@trezy.com).

### How do

#### Found a bug?

**Create an issue!**

#### Patched a bug?

**Make a pull reqest!** Fork the repo, make some changes, and submit a PR. I don't have any tests yet so I'm obviously not going to be strict about that. If you write some, though, I'll love you forever.

*NOTE*
Make sure there's an issue created for your bug. If not, go make one!

#### Adding a feature?

Please, *please*, ***please*** create an issue and get some feedback before you make a PR. I don't want you to spend your time writing a feature that I'm not going to accept.

### Getting up and running

I recommend using [Yarn](https://yarnpkg.com/en/) since I try to keep the `yarn.lock` file up-to-date. If you don't use Yarn, you're far more likely to run into dependency version issues.

1. Clone the repo
  ```
  git clone git@github.com:trezy/dnd.git
  cd eidetica
  ```
1. Install dependencies
  ```shell
  yarn install
  # or
  npm install
  ```
1. Run the app
  ```shell
  yarn run dev
  # or
  npm run dev
  ```

If you're doing styling shanges, you'll want to run the `scss-build` script to keep your styles up-to-date:

```shell
yarn run scss-build
# or
npm run scss-build
```
