


export class UserChannelPk{
    userChannel: UserChannel;

    constructor(userId: number, channelId:number){
        this.userChannel = new UserChannel(userId, channelId);
    }

    getChannelId():number{
        return this.userChannel.getChannel();
    }
    
}

class UserChannel{
    userId:number;
    channelId:number;

    constructor(userId:number, channelId:number){
        this.userId = userId;
        this.channelId = channelId;
    }

    getUserId():number{
        return this.userId;
    }

    getChannel():number{
        return this.channelId;
    }
}
