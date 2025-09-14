import { MainLayout } from "@/components/layout/MainLayout";

export default function ProfileSocials() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Your Socials</h1>
            <p className="text-muted-foreground">Link your social media accounts</p>
          </div>
        </div>

        <form className="space-y-4 max-w-3xl">
          <div>
            <label htmlFor="instagram" className="block mb-1 font-medium text-foreground">
              Instagram URL
            </label>
            <input
              type="url"
              id="instagram"
              placeholder="https://instagram.com/yourprofile"
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="youtube" className="block mb-1 font-medium text-foreground">
              YouTube URL
            </label>
            <input
              type="url"
              id="youtube"
              placeholder="https://youtube.com/yourchannel"
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="facebook" className="block mb-1 font-medium text-foreground">
              Facebook URL
            </label>
            <input
              type="url"
              id="facebook"
              placeholder="https://facebook.com/yourprofile"
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <button
            type="submit"
            className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            Save
          </button>
        </form>
      </div>
    </MainLayout>
  );
}
