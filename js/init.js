import * as User from "./models/UserModels.js";
import * as room from "./models/roomModel.js";
import * as hints from "./models/hintsModel.js";
import * as avatar from "./models/avatarModel.js";

function initialization(){
    User.init()
    room.init()
    hints.init()
    avatar.getdefaultAvatar()
    if (User.GetUsers().length === 0){
        User.add("admin","123","admin@gmail.com")
    }
}
initialization()