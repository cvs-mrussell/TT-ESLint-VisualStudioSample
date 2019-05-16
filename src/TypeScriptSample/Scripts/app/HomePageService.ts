class HomePageService {
    public constructor() {
        const button = document.getElementById('button') as HTMLButtonElement;

        button.addEventListener('click', (): void => this.onClick());
    }

    private onClick(): void {
        const text = this.getText();

        this.displayText(text);
    }

    private getText(): string {
        const el = document.getElementById('name') as HTMLInputElement;

        return `Hello ${el.value}`;
    }

    private displayText(text: string): void {
      const el = document.getElementById('output') as HTMLElement;

      el.innerText = text;
    }
}

const service = new HomePageService();