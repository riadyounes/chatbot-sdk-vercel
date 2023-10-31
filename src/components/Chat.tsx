"use client";

import { useChat } from "ai/react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  // console.log(messages);

  return (
    <Card className="w-[500px] bg-gray-700 border-none ">
      <CardHeader>
        <CardTitle className="text-gray-300 selection:">Chat AI</CardTitle>
        <CardDescription className="text-gray-400 ">
          Chatbot usando a SDK da vercel
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[640px] w-full ">
          {messages.map((message) => (
            <div
              key={message.id}
              className="flex gap-3 text-slate-100 text-sm mt-2"
            >
              {message.role === "user" && (
                <Avatar>
                  <AvatarFallback>RY</AvatarFallback>
                  <AvatarImage src="https://github.com/riadyounes.png" />
                </Avatar>
              )}
              {message.role === "assistant" && (
                <Avatar>
                  <AvatarFallback>AI</AvatarFallback>
                  <AvatarImage src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAABMlBMVEX66+vvU1D///+1AAAAAAC2FxT98vIMDAzyVlPJLyzTgoHg0tK5GxjvUk/zgH787+/eo6PgRUK1EAy/IyDwX1zBLizp2trhSkf/9/fksrH15ubSODX029v24eHrxMTpTktmYGCBeXlzbGzou7vOc3LDKCXOv7/jr6/xa2ndXlzAPjzZkpHobmzRe3qKiorMQ0HAwMB5aGiejo7ydXPCSEbbmJfBQT87OzvZ2dnKaGcnJyfQ0NDu7u6lpaVZWVm9MS+7q6uqmprwz8/FU1Kurq5NTU0aGhrTT02Xl5fIXl2OhYU6EwfnShz5cWPhZFZ+dnZ4Jwv/UQAsFBGvT7u9TLKIiaJbhKpZMYyqWf8Ayf8FKTdwXl7DtLR6etF2fMgAbpIRfagAZj8A3oMAynYDNiIHjVokeJfHAAAJKElEQVR4nO2dC3faOBbHIUKKIMKO5YYlvNwETCchaSbk0aaP4ZHOpM1MNzv7nNl2n7P7/b/C6so8bDCBTtMF4fs7HALm5hzu39fSlXRlUikEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQdYCW7Hs77BUbGb3a7VKkS37iywP1r8iwE4rldRYYMeESEkVhNSSGQrsmsidA+vskVdWKjxJogjFBpE3lvVVPp/meZeSfvIuB7s2kCCtceVh8gKBXcsdyzobSJD2KKknLhCqRB5ZFh9qwH3SSFogwKUQCoN0uiw7idPgCXHHrYHCoSRp14K9S4RlPQprIBMXB/paGGvAy/IyaRqkbCIPwhq4JJc4DVhDNQgjDbiTxCTJrhB6MuwXuEoP3iUuDFQgbBPZSXNQgDtCyuqyv9AyKLYIpVnHcco+laSSuCtBw3bV2FmNnCUh19VkSgDzaNvXUtCd41px2V9lidjFOqEbLKlBEKDyRZnkIABQA9QAQA1QAyDpGsAyGwMN7IQuuNksVasrVMIMf+r95CUJdrVBAoQI/rrbCRs4srpeZhMjYMHtfNnf6v+K3SdUHFjWV3yEl1UiJCkSmC99K7S6MJxKukiOCNAhnk1IANOqlCZHA9YgJ5HFhdF6WyLmFHUqUDwnqjHgExKkuSBP2HqnCjZjrNqHpKDWkTdHB84ULsnBp/2qslxDIWxW3c2dy0FOQAUNClCiDFMFIs9zu9X1kkHlhNvX2rfA03vRaoBY19ultZHBZhVdeCQ7NwePHvE0n0M678FUM+hwXFkPFRhkxVKeHKmMKD/ZFcxCKeFkoVarUTW/u7TZhVLAPYD11YUVGOiQdlylwoXpocAqh0SKQIFPEmAQDY6g5LBidCgUVUI4LD77VfB0WbULuwaLAKtp4ihUZrCgEpFhhKdCoWXsVFPxmMiOZZ0NfOI873nQ7s859WCWDpv5lBwbKgJIcAJ1V3kd1I6ve3637N2jAs87WTFpxrOmiqAuhEAC7QeU4w5yQOrPVIHHm6nDRl4OMFk6ksCDTi5Xq9ql/nZHuVeOF0GbHde12WHYDCLBvIYRykxGdaieOrsXG0P6OyReBDBrjc06ITOu2gTjKhTYpRSWZenm0KOSVjdCXMWLoDqAiNlx2EwYV7emskM57BS5SyXbiNAg1JtqC9SptqNmOUKdcZAYNtNmV8dF6TBPWNEuvXn87Nunr/TLQ+lOBgJUpk2anY/NoF00qliFNaAK1dKNARckB/48zwS8hTfV0Bke+OiShjbbDMyewptS2EwYVdWtGkR5MEwPnSDEtQSbisC7dzIbDQRlVlLHX43M9oKWY2Sm48mcQGDHUJAd9Am8LK/Bmxcvnm+8DLx7rt7WiYhooMzOwezZdyOzl+ptjdBwpBybEQgwa2iHwoD7ult8qT1/A95l9tWr1ESrqMxaOlpejsy+Ua+KITNoEVImzDSySquRy4X2JqizV1fOvM280kqAc5twwicaBGW2q46+1mbPg0CYMqMkl2u0Vn0orRJkPWc6Xj5QTWJN+bKXeaOe72Y4NzJ7mnmtn0dmImTGs8Gc62qnzSotoP5Jh0JuMHYuiIPM06/3A9/ujQNlFigVI5VDRbbsrniiUNIRcCBD23RG7cHmoMHfzNwFvV60PcgO2oOx2WP1nkXM8pQ6HMYOpWU7OhtYR1RpQRlGCsOVtGG/8Czw7J5+4RDMvo2ahfsFnUpC8qzGT6vbLtrbBLz36U1oQVV166mg4x/4ppOk68n8wAsGC2OzmDRC9Qw+h8tme9U14BR6xvEOFREkgK++CxJAaPQ2KjF5orzSZi/uSSdVg2CMBkfhXXujgcDXd988fh0MBDrSjxkv1EZmb+OHFWp0nTZCAzVUPgsvrMOAMBUdEF7NGDeWomaTw8u80sAzQoPfUBktLsiL4chxwDsV4vHzB/0JpSanGVTHYI4Gj8Lz4zA9nisOXavLWfNIEbOaO23GzdUgDXv7ydVupVSptQShsVEAZr4265eqtZYbZ2ayBqpXE8MJY0qz+Rnzynm9tjYym55+NloDWF/QCwfCL3t89nIT507WHZrFfGy0Bto//TR/nWm2mfEaPACoAWqAGqyhBvEN47zm0hANxEIaOOXYw2Un9vCkBmKlNdDrCvM14G5cssyzdGrxKUaDVV9nYFdE3iygQZnGjBsdSuPDI6JBuUzJ1SrPJ6ZSl0RSMfda4K4QEyJwj4p5YaA0EFSSy2U7OQf74lLO1yCtHBaRZFhFgRBz+xKlgby8WOELIcAuTtzxZqYIKvIDFeCmcVk6FRmxGpBaceUlmL7rzywRYGhUdvKwlQnKcqm/QEYBGhggAezXWihHgoZRl7EHz849o8kxpux00XeDWyBP5OmyP9i44Dvz8yMAJuCX7d5CMBG5+9N9KvC05ziOt5gAaT23vtrd4hDWIJ3pDVsPgTk3GLTrRJ6dfQkNDLrRJHPlifUFNIBk2oww0EMnefQFBs9qoLDCg6UJ2KV0v8DFYFSZpi7UffBAcFd7vDiJyhWpe1+N/ifDoZ7biBxxBKvrsvOHUiHY0lM350rQMKhOF2Vv3mbGhfBglWqnb5gEsLm7BRsxhJ/9XHyYMyAtI7eCs2qrQx6GTsvYrZ6MVXYvcp/LxW6FmaoAYEPp7udi5FWAIAiCIAiCIAiCLExpSGFhRv+ywru3FqFU2HowCoVle/OrmTj7n+R0JCSW7QiCIAiCIAiCIAiCIAiCIEgcwxKqBFdB2e39O2C/Z3Ix3Gdh32aG9JIaCexxJvP9Dz+8/20mc8eguHD80dTPJq3rby6CBr/78cf373+f2WMpu9ktaEfh0ew2u/r3o4IDtj7QXUMZQIPMH/74pz9nQAN2Wij0mt12qtsuwOtm87bX7LW7bbvdaxY/qAOnpXZ33UQADf7y008///zXQIP21t7WXrd3+rFXVK97pxsfus32Vrv7cQsOFHq37Y9767YMpuPgb3//xz8HcVAstFN37a07ddrh9V7vQ3erV2g3T297xQ/qwN3H3u2yv/NDAxr869+/QL+gNEiV9KNgwwNOd3frFI6UYClVf1iyzV0OngVo8J9f/gsa3MUkCIXe+rk8xbz8YN3av3hu9wPayXA3FhwvIAiCIAiCIMiA/wHN8QPneshJHAAAAABJRU5ErkJggg==" />
                </Avatar>
              )}

              <p className="leading-relaxed mr-3">{message.content}</p>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form className="flex gap-2 w-full" onSubmit={handleSubmit}>
          <Input
            className="bg-gray-700 text-gray-100 "
            placeholder="No que posso ajudar?"
            value={input}
            onChange={handleInputChange}
          />
          <Button
            variant="default"
            className="bg-violet-500 hover:bg-violet-600 text-gray-100"
            type="submit"
          >
            Enviar
          </Button>
        </form>
      </CardFooter>
    </Card>
    // <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800">
    //   <div className="w-[440px] h=[700px] bg-gray-900 rounded-lg shadow-lg p-4 m-2 overflow-y-auto max-h-screen">
    //     <div className="flex flex-col">
    //       {messages.map((message) => (
    //         <div key={message.id} className="mb-2 flex items-start space-y-4">
    //           {message.role === "assistant" ? (
    //             <img
    //               src="https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJvYiVDMyVCNHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    //               alt="User Avatar"
    //               className="w-8 h-8 rounded-full mr-2 mt-4"
    //             />
    //           ) : (
    //             <img
    //               src="https://github.com/riadyounes.png"
    //               alt="Bot Avatar"
    //               className="w-8 h-8 rounded-full mr-2 mt-4"
    //             />
    //           )}
    //           <p>{message.content}</p>
    //         </div>
    //       ))}
    //     </div>
    //     <form className="mt-4 flex items-stretch gap-2" onSubmit={handleSubmit}>
    //       <input
    //         type="text"
    //         value={input}
    //         onChange={handleInputChange}
    //         className="flex-grow px-4 py-2 border border-gray-500 rounded-md text-gray-900"
    //         placeholder="Digite sua mensagem..."
    //       />
    //       <button
    //         type="submit"
    //         className="bg-orange-500 text-white px-4 py-2 rounded-md"
    //       >
    //         Enviar
    //       </button>
    //     </form>
    //   </div>
    // </div>
  );
}
