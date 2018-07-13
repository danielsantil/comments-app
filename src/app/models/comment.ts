export class Comment {
    id?: number;
    name: string;
    email: string;
    website?: string;
    content: string;

    constructor(name: string, email: string, website: string, content: string) {
        this.name = name;
        this.email = name;
        this.website = website;
        this.content = content;
    }
}
