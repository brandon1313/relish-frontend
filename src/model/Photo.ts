export interface Photo {
    id: number;
    url: string;
    title: string;
    album: {
      title: string;
      user: {
        name: string;
        email: string;
        website: string;
        company: {
          name: string;
        };
      };
    };
  }