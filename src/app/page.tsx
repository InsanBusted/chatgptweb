'use client'
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useChat } from "ai/react";
import { Send } from "lucide-react";
import Message from "./components/Messages";
import { useRef } from "react";


export default function Home() {
  // const session = await getServerSession();

  const {messages, handleSubmit, input, handleInputChange} = useChat();
  const formRef = useRef<HTMLFormElement>(null)
  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      formRef.current?.requestSubmit();
    }
  }
  return (
    // getServerSession Result
    // {session?.user?.name ? (
    //   <div>{session?.user?.name}</div>
    // ) : (
    //   <div>Not Logged In</div>
    // )}

    <main className="fixed h-full w-full bg-muted flex flex-col items-center">
      <div className="container h-full flex flex-col py-8">
        {/* messages */}
        <div className="flex-1 overflow-y-auto">
          {messages.map((message) => (
           <Message key={message.id} message={message} />
          ))}
        </div>
        <form ref={formRef} onSubmit={handleSubmit} className="mt-auto relative">
          <Textarea
          className="w-full text-lg"
          placeholder="Say Something..."
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          />
          <Button
          type="submit"
          size='icon'
          disabled={!input}
          className="absolute top-1/2 transform -translate-y-1/2 right-4 rounded-full"
          >
            <Send size={24}></Send>
            </Button>
        </form>
      </div>
    </main>
  );
}