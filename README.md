# Lab #5: Redux

Your task in this lab is to redux-ify the todo list from the second and third lab. (we've pre-filled the solution from the interaction lab, you won't have to do that again!) It should be possible to check items and to add new items, with the items and the value of the input being stored in the store.

This is what the finished app should look like:

![Checking todos and adding new ones](https://cloud.githubusercontent.com/assets/7525670/22978746/4121f3de-f394-11e6-8e19-f366754d0f47.gif)

(exactly the same as it does now)

You'll need to setup Redux and `react-redux` in the `App.js` file, connect the `TodoList` with the Redux state, create three actions in `actions.js` and write your reducer to handle those three actions in `reducer.js`.

## Testing

To make it easier for you to complete this task, we've (again) added tests verifying that you've arrived at the correct app. This command will run the tests:

```sh
npm run test
```

If you haven't changed anything you should see test failures showing you what exactly we expect the app to do. (or a bunch of "function not found" if you haven't changed anything yet)

## License

Copyright (C) 2017  Maximilian Stoiber & Nikolaus Graf. You may use this repo for non-commercial use under the GPLv3 license.

```
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
```

(see [LICENSE.md](LICENSE.md) for the full license text)
