import { Injectable } from "@nestjs/common";
import { WebSocketServer } from "@nestjs/websockets";
import { Server, Socket } from 'socket.io';

// @Injectable()
export class GatewayService {
  @WebSocketServer()
  private server: Server;

  onNewQuestion(body: any) {
    console.log('onnewquestion  ', this.server)
    return this.server.emit('newQuestion', { data: body });
  }
}