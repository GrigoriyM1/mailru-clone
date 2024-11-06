import { Controller, OnModuleInit } from "@nestjs/common";
import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer, ConnectedSocket } from "@nestjs/websockets";
import { Server, Socket } from 'socket.io';
import { GatewayService } from "./gateway.service";

@Controller('gateway')
@WebSocketGateway(3001, {
  cors: {
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  },
  namespace: '/'
})
export class GatewayController {
  constructor(private readonly gatewayService: GatewayService) { }

  @WebSocketServer()
  server: Server;

  // private questionSockets: Map<number, Set<string>> = new Map();

  // onModuleInit() {
  //   // this.server.on('connection', socket => {
  //     // console.log('Connected ', socket.id);
  //   // });
  //   console.log('server  ', this.server)
  // }

  // @SubscribeMessage('joinQuestion')
  // handleJoinQuestion(
  //   @MessageBody() body: { questionId: number }, 
  //   @ConnectedSocket() socket: Socket
  // ) {
  //   const { questionId } = body;

  //   if (!this.questionSockets.has(questionId)) {
  //     this.questionSockets.set(questionId, new Set());
  //   }
  //   this.questionSockets.get(questionId).add(socket.id); 
  // }

  @SubscribeMessage('newQuestion')
  onNewQuestion(@MessageBody() body: any) {
    this.server.emit('newQuestion', { data: body });
  }

  // @SubscribeMessage('newAnswer')
  // onNewAnswer(@MessageBody() body: { questionId: number, answer: any }) {
  //   const sockets = this.questionSockets.get(body.questionId);

  //   // console.log('newanswer ', body)
    
  //   if (sockets) {
  //     sockets.forEach(socketId => {
  //       this.server.to(socketId).emit('newAnswer', { data: body }); // Отправляем только нужным сокетам
  //     });
  //   }
  // }

  // @SubscribeMessage('disconnect')
  // handleDisconnect(socket: any) {
  //   this.questionSockets.forEach((sockets, questionId) => {
  //     sockets.delete(socket.id);
  //     if (sockets.size === 0) {
  //       this.questionSockets.delete(questionId); // Удаляем, если нет активных сокетов
  //     }
  //   });
  // }
}