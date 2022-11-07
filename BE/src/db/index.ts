import mongoose from 'mongoose';

export const connect = async (dsn: string) => mongoose.connect(dsn);
