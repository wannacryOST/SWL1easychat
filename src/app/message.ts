export class Message {
    public message: string;
    public nickname: string;
    public timestamp: Date;
    public type: string;
    public showNickname: boolean = true;
    public userId;

    constructor(message: string, nickname: string, date: Date, type: string, userId:any){
        this.message = message;
        this.nickname = nickname;
        this.timestamp = date;
        this.type = type;
        this.userId = userId;
      }
}
