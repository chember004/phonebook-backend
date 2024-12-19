import { Request, Response } from "express";
import { hashPassword } from "../util/helper";
import { IContact, Contact } from "../models/mongoose/Contact";
import { matchedData, validationResult } from "express-validator";
import { ContactIdParams } from "../types/contacts";

export const getContacts = async (req: Request, res: Response) => {
  try {
    const contacts = await Contact.find({});
    res.send(contacts);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

export const getContactById = async (
  req: Request<ContactIdParams, {}, {}>,
  res: Response
) => {
  try {
    const { id } = req.params;
    const contact = await Contact.findById(id);
    res.send(contact);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

export const deleteContact = async (
  req: Request<ContactIdParams, {}, {}>,
  res: Response
) => {
  const { id } = req.params;
  try {
    const deletedContact = await Contact.findByIdAndDelete(id);
    res.send(deletedContact);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

export const updateContact = async (
  req: Request<ContactIdParams, {}, IContact>,
  res: Response
) => {
  const { id } = req.params;
  const result = validationResult(req);
  if (!result.isEmpty()) return res.status(400).send(result.array());
  const data = matchedData(req);
  data.password = hashPassword(data.password);
  try {
    const updatedContact = Contact.findByIdAndUpdate(id, data, { new: true });
    return res.status(201).send(updatedContact);
  } catch (err) {
    return res.sendStatus(400);
  }
};

export const createContact = async (
  req: Request<{}, {}, IContact>,
  res: Response
) => {
  console.log("/api/Contact POST method");
  const result = validationResult(req);
  if (!result.isEmpty()) return res.status(400).send(result.array());
  const data = matchedData(req);
  data.password = hashPassword(data.password);
  const newContact = new Contact(data);
  console.log(newContact);
  try {
    const savedContact = await newContact.save();
    return res.status(201).send(savedContact);
  } catch (err) {
    return res.sendStatus(400);
  }
};
