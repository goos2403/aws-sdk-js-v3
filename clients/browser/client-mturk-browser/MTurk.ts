import { MTurkClient } from "./MTurkClient";
import { AcceptQualificationRequestInput } from "./types/AcceptQualificationRequestInput";
import { AcceptQualificationRequestOutput } from "./types/AcceptQualificationRequestOutput";
import { ApproveAssignmentInput } from "./types/ApproveAssignmentInput";
import { ApproveAssignmentOutput } from "./types/ApproveAssignmentOutput";
import { AssociateQualificationWithWorkerInput } from "./types/AssociateQualificationWithWorkerInput";
import { AssociateQualificationWithWorkerOutput } from "./types/AssociateQualificationWithWorkerOutput";
import { CreateAdditionalAssignmentsForHITInput } from "./types/CreateAdditionalAssignmentsForHITInput";
import { CreateAdditionalAssignmentsForHITOutput } from "./types/CreateAdditionalAssignmentsForHITOutput";
import { CreateHITInput } from "./types/CreateHITInput";
import { CreateHITOutput } from "./types/CreateHITOutput";
import { CreateHITTypeInput } from "./types/CreateHITTypeInput";
import { CreateHITTypeOutput } from "./types/CreateHITTypeOutput";
import { CreateHITWithHITTypeInput } from "./types/CreateHITWithHITTypeInput";
import { CreateHITWithHITTypeOutput } from "./types/CreateHITWithHITTypeOutput";
import { CreateQualificationTypeInput } from "./types/CreateQualificationTypeInput";
import { CreateQualificationTypeOutput } from "./types/CreateQualificationTypeOutput";
import { CreateWorkerBlockInput } from "./types/CreateWorkerBlockInput";
import { CreateWorkerBlockOutput } from "./types/CreateWorkerBlockOutput";
import { DeleteHITInput } from "./types/DeleteHITInput";
import { DeleteHITOutput } from "./types/DeleteHITOutput";
import { DeleteQualificationTypeInput } from "./types/DeleteQualificationTypeInput";
import { DeleteQualificationTypeOutput } from "./types/DeleteQualificationTypeOutput";
import { DeleteWorkerBlockInput } from "./types/DeleteWorkerBlockInput";
import { DeleteWorkerBlockOutput } from "./types/DeleteWorkerBlockOutput";
import { DisassociateQualificationFromWorkerInput } from "./types/DisassociateQualificationFromWorkerInput";
import { DisassociateQualificationFromWorkerOutput } from "./types/DisassociateQualificationFromWorkerOutput";
import { GetAccountBalanceInput } from "./types/GetAccountBalanceInput";
import { GetAccountBalanceOutput } from "./types/GetAccountBalanceOutput";
import { GetAssignmentInput } from "./types/GetAssignmentInput";
import { GetAssignmentOutput } from "./types/GetAssignmentOutput";
import { GetFileUploadURLInput } from "./types/GetFileUploadURLInput";
import { GetFileUploadURLOutput } from "./types/GetFileUploadURLOutput";
import { GetHITInput } from "./types/GetHITInput";
import { GetHITOutput } from "./types/GetHITOutput";
import { GetQualificationScoreInput } from "./types/GetQualificationScoreInput";
import { GetQualificationScoreOutput } from "./types/GetQualificationScoreOutput";
import { GetQualificationTypeInput } from "./types/GetQualificationTypeInput";
import { GetQualificationTypeOutput } from "./types/GetQualificationTypeOutput";
import { ListAssignmentsForHITInput } from "./types/ListAssignmentsForHITInput";
import { ListAssignmentsForHITOutput } from "./types/ListAssignmentsForHITOutput";
import { ListBonusPaymentsInput } from "./types/ListBonusPaymentsInput";
import { ListBonusPaymentsOutput } from "./types/ListBonusPaymentsOutput";
import { ListHITsForQualificationTypeInput } from "./types/ListHITsForQualificationTypeInput";
import { ListHITsForQualificationTypeOutput } from "./types/ListHITsForQualificationTypeOutput";
import { ListHITsInput } from "./types/ListHITsInput";
import { ListHITsOutput } from "./types/ListHITsOutput";
import { ListQualificationRequestsInput } from "./types/ListQualificationRequestsInput";
import { ListQualificationRequestsOutput } from "./types/ListQualificationRequestsOutput";
import { ListQualificationTypesInput } from "./types/ListQualificationTypesInput";
import { ListQualificationTypesOutput } from "./types/ListQualificationTypesOutput";
import { ListReviewPolicyResultsForHITInput } from "./types/ListReviewPolicyResultsForHITInput";
import { ListReviewPolicyResultsForHITOutput } from "./types/ListReviewPolicyResultsForHITOutput";
import { ListReviewableHITsInput } from "./types/ListReviewableHITsInput";
import { ListReviewableHITsOutput } from "./types/ListReviewableHITsOutput";
import { ListWorkerBlocksInput } from "./types/ListWorkerBlocksInput";
import { ListWorkerBlocksOutput } from "./types/ListWorkerBlocksOutput";
import { ListWorkersWithQualificationTypeInput } from "./types/ListWorkersWithQualificationTypeInput";
import { ListWorkersWithQualificationTypeOutput } from "./types/ListWorkersWithQualificationTypeOutput";
import { NotifyWorkersInput } from "./types/NotifyWorkersInput";
import { NotifyWorkersOutput } from "./types/NotifyWorkersOutput";
import { RejectAssignmentInput } from "./types/RejectAssignmentInput";
import { RejectAssignmentOutput } from "./types/RejectAssignmentOutput";
import { RejectQualificationRequestInput } from "./types/RejectQualificationRequestInput";
import { RejectQualificationRequestOutput } from "./types/RejectQualificationRequestOutput";
import { RequestError } from "./types/RequestError";
import { SendBonusInput } from "./types/SendBonusInput";
import { SendBonusOutput } from "./types/SendBonusOutput";
import { SendTestEventNotificationInput } from "./types/SendTestEventNotificationInput";
import { SendTestEventNotificationOutput } from "./types/SendTestEventNotificationOutput";
import { ServiceFault } from "./types/ServiceFault";
import { UpdateExpirationForHITInput } from "./types/UpdateExpirationForHITInput";
import { UpdateExpirationForHITOutput } from "./types/UpdateExpirationForHITOutput";
import { UpdateHITReviewStatusInput } from "./types/UpdateHITReviewStatusInput";
import { UpdateHITReviewStatusOutput } from "./types/UpdateHITReviewStatusOutput";
import { UpdateHITTypeOfHITInput } from "./types/UpdateHITTypeOfHITInput";
import { UpdateHITTypeOfHITOutput } from "./types/UpdateHITTypeOfHITOutput";
import { UpdateNotificationSettingsInput } from "./types/UpdateNotificationSettingsInput";
import { UpdateNotificationSettingsOutput } from "./types/UpdateNotificationSettingsOutput";
import { UpdateQualificationTypeInput } from "./types/UpdateQualificationTypeInput";
import { UpdateQualificationTypeOutput } from "./types/UpdateQualificationTypeOutput";
import { AcceptQualificationRequestCommand } from "./commands/AcceptQualificationRequestCommand";
import { ApproveAssignmentCommand } from "./commands/ApproveAssignmentCommand";
import { AssociateQualificationWithWorkerCommand } from "./commands/AssociateQualificationWithWorkerCommand";
import { CreateAdditionalAssignmentsForHITCommand } from "./commands/CreateAdditionalAssignmentsForHITCommand";
import { CreateHITCommand } from "./commands/CreateHITCommand";
import { CreateHITTypeCommand } from "./commands/CreateHITTypeCommand";
import { CreateHITWithHITTypeCommand } from "./commands/CreateHITWithHITTypeCommand";
import { CreateQualificationTypeCommand } from "./commands/CreateQualificationTypeCommand";
import { CreateWorkerBlockCommand } from "./commands/CreateWorkerBlockCommand";
import { DeleteHITCommand } from "./commands/DeleteHITCommand";
import { DeleteQualificationTypeCommand } from "./commands/DeleteQualificationTypeCommand";
import { DeleteWorkerBlockCommand } from "./commands/DeleteWorkerBlockCommand";
import { DisassociateQualificationFromWorkerCommand } from "./commands/DisassociateQualificationFromWorkerCommand";
import { GetAccountBalanceCommand } from "./commands/GetAccountBalanceCommand";
import { GetAssignmentCommand } from "./commands/GetAssignmentCommand";
import { GetFileUploadURLCommand } from "./commands/GetFileUploadURLCommand";
import { GetHITCommand } from "./commands/GetHITCommand";
import { GetQualificationScoreCommand } from "./commands/GetQualificationScoreCommand";
import { GetQualificationTypeCommand } from "./commands/GetQualificationTypeCommand";
import { ListAssignmentsForHITCommand } from "./commands/ListAssignmentsForHITCommand";
import { ListBonusPaymentsCommand } from "./commands/ListBonusPaymentsCommand";
import { ListHITsCommand } from "./commands/ListHITsCommand";
import { ListHITsForQualificationTypeCommand } from "./commands/ListHITsForQualificationTypeCommand";
import { ListQualificationRequestsCommand } from "./commands/ListQualificationRequestsCommand";
import { ListQualificationTypesCommand } from "./commands/ListQualificationTypesCommand";
import { ListReviewPolicyResultsForHITCommand } from "./commands/ListReviewPolicyResultsForHITCommand";
import { ListReviewableHITsCommand } from "./commands/ListReviewableHITsCommand";
import { ListWorkerBlocksCommand } from "./commands/ListWorkerBlocksCommand";
import { ListWorkersWithQualificationTypeCommand } from "./commands/ListWorkersWithQualificationTypeCommand";
import { NotifyWorkersCommand } from "./commands/NotifyWorkersCommand";
import { RejectAssignmentCommand } from "./commands/RejectAssignmentCommand";
import { RejectQualificationRequestCommand } from "./commands/RejectQualificationRequestCommand";
import { SendBonusCommand } from "./commands/SendBonusCommand";
import { SendTestEventNotificationCommand } from "./commands/SendTestEventNotificationCommand";
import { UpdateExpirationForHITCommand } from "./commands/UpdateExpirationForHITCommand";
import { UpdateHITReviewStatusCommand } from "./commands/UpdateHITReviewStatusCommand";
import { UpdateHITTypeOfHITCommand } from "./commands/UpdateHITTypeOfHITCommand";
import { UpdateNotificationSettingsCommand } from "./commands/UpdateNotificationSettingsCommand";
import { UpdateQualificationTypeCommand } from "./commands/UpdateQualificationTypeCommand";

export class MTurk extends MTurkClient {
  /**
   * <p> The <code>AcceptQualificationRequest</code> operation approves a Worker's request for a Qualification. </p> <p> Only the owner of the Qualification type can grant a Qualification request for that type. </p> <p> A successful request for the <code>AcceptQualificationRequest</code> operation returns with no errors and an empty body. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceFault} <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
   *   - {RequestError} <p>Your request is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public acceptQualificationRequest(
    args: AcceptQualificationRequestInput
  ): Promise<AcceptQualificationRequestOutput>;
  public acceptQualificationRequest(
    args: AcceptQualificationRequestInput,
    cb: (err: any, data?: AcceptQualificationRequestOutput) => void
  ): void;
  public acceptQualificationRequest(
    args: AcceptQualificationRequestInput,
    cb?: (err: any, data?: AcceptQualificationRequestOutput) => void
  ): Promise<AcceptQualificationRequestOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AcceptQualificationRequestCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> The <code>ApproveAssignment</code> operation approves the results of a completed assignment. </p> <p> Approving an assignment initiates two payments from the Requester's Amazon.com account </p> <ul> <li> <p> The Worker who submitted the results is paid the reward specified in the HIT. </p> </li> <li> <p> Amazon Mechanical Turk fees are debited. </p> </li> </ul> <p> If the Requester's account does not have adequate funds for these payments, the call to ApproveAssignment returns an exception, and the approval is not processed. You can include an optional feedback message with the approval, which the Worker can see in the Status section of the web site. </p> <p> You can also call this operation for assignments that were previous rejected and approve them by explicitly overriding the previous rejection. This only works on rejected assignments that were submitted within the previous 30 days and only if the assignment's related HIT has not been deleted. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceFault} <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
   *   - {RequestError} <p>Your request is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public approveAssignment(
    args: ApproveAssignmentInput
  ): Promise<ApproveAssignmentOutput>;
  public approveAssignment(
    args: ApproveAssignmentInput,
    cb: (err: any, data?: ApproveAssignmentOutput) => void
  ): void;
  public approveAssignment(
    args: ApproveAssignmentInput,
    cb?: (err: any, data?: ApproveAssignmentOutput) => void
  ): Promise<ApproveAssignmentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ApproveAssignmentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> The <code>AssociateQualificationWithWorker</code> operation gives a Worker a Qualification. <code>AssociateQualificationWithWorker</code> does not require that the Worker submit a Qualification request. It gives the Qualification directly to the Worker. </p> <p> You can only assign a Qualification of a Qualification type that you created (using the <code>CreateQualificationType</code> operation). </p> <note> <p> Note: <code>AssociateQualificationWithWorker</code> does not affect any pending Qualification requests for the Qualification by the Worker. If you assign a Qualification to a Worker, then later grant a Qualification request made by the Worker, the granting of the request may modify the Qualification score. To resolve a pending Qualification request without affecting the Qualification the Worker already has, reject the request with the <code>RejectQualificationRequest</code> operation. </p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceFault} <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
   *   - {RequestError} <p>Your request is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public associateQualificationWithWorker(
    args: AssociateQualificationWithWorkerInput
  ): Promise<AssociateQualificationWithWorkerOutput>;
  public associateQualificationWithWorker(
    args: AssociateQualificationWithWorkerInput,
    cb: (err: any, data?: AssociateQualificationWithWorkerOutput) => void
  ): void;
  public associateQualificationWithWorker(
    args: AssociateQualificationWithWorkerInput,
    cb?: (err: any, data?: AssociateQualificationWithWorkerOutput) => void
  ): Promise<AssociateQualificationWithWorkerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AssociateQualificationWithWorkerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> The <code>CreateAdditionalAssignmentsForHIT</code> operation increases the maximum number of assignments of an existing HIT. </p> <p> To extend the maximum number of assignments, specify the number of additional assignments.</p> <note> <ul> <li> <p>HITs created with fewer than 10 assignments cannot be extended to have 10 or more assignments. Attempting to add assignments in a way that brings the total number of assignments for a HIT from fewer than 10 assignments to 10 or more assignments will result in an <code>AWS.MechanicalTurk.InvalidMaximumAssignmentsIncrease</code> exception.</p> </li> <li> <p>HITs that were created before July 22, 2015 cannot be extended. Attempting to extend HITs that were created before July 22, 2015 will result in an <code>AWS.MechanicalTurk.HITTooOldForExtension</code> exception. </p> </li> </ul> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceFault} <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
   *   - {RequestError} <p>Your request is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createAdditionalAssignmentsForHIT(
    args: CreateAdditionalAssignmentsForHITInput
  ): Promise<CreateAdditionalAssignmentsForHITOutput>;
  public createAdditionalAssignmentsForHIT(
    args: CreateAdditionalAssignmentsForHITInput,
    cb: (err: any, data?: CreateAdditionalAssignmentsForHITOutput) => void
  ): void;
  public createAdditionalAssignmentsForHIT(
    args: CreateAdditionalAssignmentsForHITInput,
    cb?: (err: any, data?: CreateAdditionalAssignmentsForHITOutput) => void
  ): Promise<CreateAdditionalAssignmentsForHITOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateAdditionalAssignmentsForHITCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>The <code>CreateHIT</code> operation creates a new Human Intelligence Task (HIT). The new HIT is made available for Workers to find and accept on the Amazon Mechanical Turk website. </p> <p> This operation allows you to specify a new HIT by passing in values for the properties of the HIT, such as its title, reward amount and number of assignments. When you pass these values to <code>CreateHIT</code>, a new HIT is created for you, with a new <code>HITTypeID</code>. The HITTypeID can be used to create additional HITs in the future without needing to specify common parameters such as the title, description and reward amount each time.</p> <p> An alternative way to create HITs is to first generate a HITTypeID using the <code>CreateHITType</code> operation and then call the <code>CreateHITWithHITType</code> operation. This is the recommended best practice for Requesters who are creating large numbers of HITs. </p> <p>CreateHIT also supports several ways to provide question data: by providing a value for the <code>Question</code> parameter that fully specifies the contents of the HIT, or by providing a <code>HitLayoutId</code> and associated <code>HitLayoutParameters</code>. </p> <note> <p> If a HIT is created with 10 or more maximum assignments, there is an additional fee. For more information, see <a href="https://requester.mturk.com/pricing">Amazon Mechanical Turk Pricing</a>.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceFault} <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
   *   - {RequestError} <p>Your request is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createHIT(args: CreateHITInput): Promise<CreateHITOutput>;
  public createHIT(
    args: CreateHITInput,
    cb: (err: any, data?: CreateHITOutput) => void
  ): void;
  public createHIT(
    args: CreateHITInput,
    cb?: (err: any, data?: CreateHITOutput) => void
  ): Promise<CreateHITOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateHITCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> The <code>CreateHITType</code> operation creates a new HIT type. This operation allows you to define a standard set of HIT properties to use when creating HITs. If you register a HIT type with values that match an existing HIT type, the HIT type ID of the existing type will be returned. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceFault} <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
   *   - {RequestError} <p>Your request is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createHITType(args: CreateHITTypeInput): Promise<CreateHITTypeOutput>;
  public createHITType(
    args: CreateHITTypeInput,
    cb: (err: any, data?: CreateHITTypeOutput) => void
  ): void;
  public createHITType(
    args: CreateHITTypeInput,
    cb?: (err: any, data?: CreateHITTypeOutput) => void
  ): Promise<CreateHITTypeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateHITTypeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> The <code>CreateHITWithHITType</code> operation creates a new Human Intelligence Task (HIT) using an existing HITTypeID generated by the <code>CreateHITType</code> operation. </p> <p> This is an alternative way to create HITs from the <code>CreateHIT</code> operation. This is the recommended best practice for Requesters who are creating large numbers of HITs. </p> <p>CreateHITWithHITType also supports several ways to provide question data: by providing a value for the <code>Question</code> parameter that fully specifies the contents of the HIT, or by providing a <code>HitLayoutId</code> and associated <code>HitLayoutParameters</code>. </p> <note> <p> If a HIT is created with 10 or more maximum assignments, there is an additional fee. For more information, see <a href="https://requester.mturk.com/pricing">Amazon Mechanical Turk Pricing</a>. </p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceFault} <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
   *   - {RequestError} <p>Your request is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createHITWithHITType(
    args: CreateHITWithHITTypeInput
  ): Promise<CreateHITWithHITTypeOutput>;
  public createHITWithHITType(
    args: CreateHITWithHITTypeInput,
    cb: (err: any, data?: CreateHITWithHITTypeOutput) => void
  ): void;
  public createHITWithHITType(
    args: CreateHITWithHITTypeInput,
    cb?: (err: any, data?: CreateHITWithHITTypeOutput) => void
  ): Promise<CreateHITWithHITTypeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateHITWithHITTypeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> The <code>CreateQualificationType</code> operation creates a new Qualification type, which is represented by a <code>QualificationType</code> data structure. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceFault} <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
   *   - {RequestError} <p>Your request is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createQualificationType(
    args: CreateQualificationTypeInput
  ): Promise<CreateQualificationTypeOutput>;
  public createQualificationType(
    args: CreateQualificationTypeInput,
    cb: (err: any, data?: CreateQualificationTypeOutput) => void
  ): void;
  public createQualificationType(
    args: CreateQualificationTypeInput,
    cb?: (err: any, data?: CreateQualificationTypeOutput) => void
  ): Promise<CreateQualificationTypeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateQualificationTypeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>The <code>CreateWorkerBlock</code> operation allows you to prevent a Worker from working on your HITs. For example, you can block a Worker who is producing poor quality work. You can block up to 100,000 Workers.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceFault} <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
   *   - {RequestError} <p>Your request is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createWorkerBlock(
    args: CreateWorkerBlockInput
  ): Promise<CreateWorkerBlockOutput>;
  public createWorkerBlock(
    args: CreateWorkerBlockInput,
    cb: (err: any, data?: CreateWorkerBlockOutput) => void
  ): void;
  public createWorkerBlock(
    args: CreateWorkerBlockInput,
    cb?: (err: any, data?: CreateWorkerBlockOutput) => void
  ): Promise<CreateWorkerBlockOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateWorkerBlockCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> The <code>DeleteHIT</code> operation is used to delete HIT that is no longer needed. Only the Requester who created the HIT can delete it. </p> <p> You can only dispose of HITs that are in the <code>Reviewable</code> state, with all of their submitted assignments already either approved or rejected. If you call the DeleteHIT operation on a HIT that is not in the <code>Reviewable</code> state (for example, that has not expired, or still has active assignments), or on a HIT that is Reviewable but without all of its submitted assignments already approved or rejected, the service will return an error. </p> <note> <ul> <li> <p> HITs are automatically disposed of after 120 days. </p> </li> <li> <p> After you dispose of a HIT, you can no longer approve the HIT's rejected assignments. </p> </li> <li> <p> Disposed HITs are not returned in results for the ListHITs operation. </p> </li> <li> <p> Disposing HITs can improve the performance of operations such as ListReviewableHITs and ListHITs. </p> </li> </ul> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceFault} <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
   *   - {RequestError} <p>Your request is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteHIT(args: DeleteHITInput): Promise<DeleteHITOutput>;
  public deleteHIT(
    args: DeleteHITInput,
    cb: (err: any, data?: DeleteHITOutput) => void
  ): void;
  public deleteHIT(
    args: DeleteHITInput,
    cb?: (err: any, data?: DeleteHITOutput) => void
  ): Promise<DeleteHITOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteHITCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> The <code>DeleteQualificationType</code> deletes a Qualification type and deletes any HIT types that are associated with the Qualification type. </p> <p>This operation does not revoke Qualifications already assigned to Workers because the Qualifications might be needed for active HITs. If there are any pending requests for the Qualification type, Amazon Mechanical Turk rejects those requests. After you delete a Qualification type, you can no longer use it to create HITs or HIT types.</p> <note> <p>DeleteQualificationType must wait for all the HITs that use the deleted Qualification type to be deleted before completing. It may take up to 48 hours before DeleteQualificationType completes and the unique name of the Qualification type is available for reuse with CreateQualificationType.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceFault} <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
   *   - {RequestError} <p>Your request is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteQualificationType(
    args: DeleteQualificationTypeInput
  ): Promise<DeleteQualificationTypeOutput>;
  public deleteQualificationType(
    args: DeleteQualificationTypeInput,
    cb: (err: any, data?: DeleteQualificationTypeOutput) => void
  ): void;
  public deleteQualificationType(
    args: DeleteQualificationTypeInput,
    cb?: (err: any, data?: DeleteQualificationTypeOutput) => void
  ): Promise<DeleteQualificationTypeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteQualificationTypeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>The <code>DeleteWorkerBlock</code> operation allows you to reinstate a blocked Worker to work on your HITs. This operation reverses the effects of the CreateWorkerBlock operation. You need the Worker ID to use this operation. If the Worker ID is missing or invalid, this operation fails and returns the message “WorkerId is invalid.” If the specified Worker is not blocked, this operation returns successfully.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceFault} <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
   *   - {RequestError} <p>Your request is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteWorkerBlock(
    args: DeleteWorkerBlockInput
  ): Promise<DeleteWorkerBlockOutput>;
  public deleteWorkerBlock(
    args: DeleteWorkerBlockInput,
    cb: (err: any, data?: DeleteWorkerBlockOutput) => void
  ): void;
  public deleteWorkerBlock(
    args: DeleteWorkerBlockInput,
    cb?: (err: any, data?: DeleteWorkerBlockOutput) => void
  ): Promise<DeleteWorkerBlockOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteWorkerBlockCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> The <code>DisassociateQualificationFromWorker</code> revokes a previously granted Qualification from a user. </p> <p> You can provide a text message explaining why the Qualification was revoked. The user who had the Qualification can see this message. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceFault} <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
   *   - {RequestError} <p>Your request is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disassociateQualificationFromWorker(
    args: DisassociateQualificationFromWorkerInput
  ): Promise<DisassociateQualificationFromWorkerOutput>;
  public disassociateQualificationFromWorker(
    args: DisassociateQualificationFromWorkerInput,
    cb: (err: any, data?: DisassociateQualificationFromWorkerOutput) => void
  ): void;
  public disassociateQualificationFromWorker(
    args: DisassociateQualificationFromWorkerInput,
    cb?: (err: any, data?: DisassociateQualificationFromWorkerOutput) => void
  ): Promise<DisassociateQualificationFromWorkerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisassociateQualificationFromWorkerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>The <code>GetAccountBalance</code> operation retrieves the amount of money in your Amazon Mechanical Turk account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceFault} <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
   *   - {RequestError} <p>Your request is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getAccountBalance(
    args: GetAccountBalanceInput
  ): Promise<GetAccountBalanceOutput>;
  public getAccountBalance(
    args: GetAccountBalanceInput,
    cb: (err: any, data?: GetAccountBalanceOutput) => void
  ): void;
  public getAccountBalance(
    args: GetAccountBalanceInput,
    cb?: (err: any, data?: GetAccountBalanceOutput) => void
  ): Promise<GetAccountBalanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetAccountBalanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> The <code>GetAssignment</code> operation retrieves the details of the specified Assignment. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceFault} <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
   *   - {RequestError} <p>Your request is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getAssignment(args: GetAssignmentInput): Promise<GetAssignmentOutput>;
  public getAssignment(
    args: GetAssignmentInput,
    cb: (err: any, data?: GetAssignmentOutput) => void
  ): void;
  public getAssignment(
    args: GetAssignmentInput,
    cb?: (err: any, data?: GetAssignmentOutput) => void
  ): Promise<GetAssignmentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetAssignmentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> The <code>GetFileUploadURL</code> operation generates and returns a temporary URL. You use the temporary URL to retrieve a file uploaded by a Worker as an answer to a FileUploadAnswer question for a HIT. The temporary URL is generated the instant the GetFileUploadURL operation is called, and is valid for 60 seconds. You can get a temporary file upload URL any time until the HIT is disposed. After the HIT is disposed, any uploaded files are deleted, and cannot be retrieved. Pending Deprecation on December 12, 2017. The Answer Specification structure will no longer support the <code>FileUploadAnswer</code> element to be used for the QuestionForm data structure. Instead, we recommend that Requesters who want to create HITs asking Workers to upload files to use Amazon S3. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceFault} <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
   *   - {RequestError} <p>Your request is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getFileUploadURL(
    args: GetFileUploadURLInput
  ): Promise<GetFileUploadURLOutput>;
  public getFileUploadURL(
    args: GetFileUploadURLInput,
    cb: (err: any, data?: GetFileUploadURLOutput) => void
  ): void;
  public getFileUploadURL(
    args: GetFileUploadURLInput,
    cb?: (err: any, data?: GetFileUploadURLOutput) => void
  ): Promise<GetFileUploadURLOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetFileUploadURLCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> The <code>GetHIT</code> operation retrieves the details of the specified HIT. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceFault} <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
   *   - {RequestError} <p>Your request is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getHIT(args: GetHITInput): Promise<GetHITOutput>;
  public getHIT(
    args: GetHITInput,
    cb: (err: any, data?: GetHITOutput) => void
  ): void;
  public getHIT(
    args: GetHITInput,
    cb?: (err: any, data?: GetHITOutput) => void
  ): Promise<GetHITOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetHITCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> The <code>GetQualificationScore</code> operation returns the value of a Worker's Qualification for a given Qualification type. </p> <p> To get a Worker's Qualification, you must know the Worker's ID. The Worker's ID is included in the assignment data returned by the <code>ListAssignmentsForHIT</code> operation. </p> <p>Only the owner of a Qualification type can query the value of a Worker's Qualification of that type.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceFault} <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
   *   - {RequestError} <p>Your request is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getQualificationScore(
    args: GetQualificationScoreInput
  ): Promise<GetQualificationScoreOutput>;
  public getQualificationScore(
    args: GetQualificationScoreInput,
    cb: (err: any, data?: GetQualificationScoreOutput) => void
  ): void;
  public getQualificationScore(
    args: GetQualificationScoreInput,
    cb?: (err: any, data?: GetQualificationScoreOutput) => void
  ): Promise<GetQualificationScoreOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetQualificationScoreCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> The <code>GetQualificationType</code>operation retrieves information about a Qualification type using its ID. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceFault} <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
   *   - {RequestError} <p>Your request is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getQualificationType(
    args: GetQualificationTypeInput
  ): Promise<GetQualificationTypeOutput>;
  public getQualificationType(
    args: GetQualificationTypeInput,
    cb: (err: any, data?: GetQualificationTypeOutput) => void
  ): void;
  public getQualificationType(
    args: GetQualificationTypeInput,
    cb?: (err: any, data?: GetQualificationTypeOutput) => void
  ): Promise<GetQualificationTypeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetQualificationTypeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> The <code>ListAssignmentsForHIT</code> operation retrieves completed assignments for a HIT. You can use this operation to retrieve the results for a HIT. </p> <p> You can get assignments for a HIT at any time, even if the HIT is not yet Reviewable. If a HIT requested multiple assignments, and has received some results but has not yet become Reviewable, you can still retrieve the partial results with this operation. </p> <p> Use the AssignmentStatus parameter to control which set of assignments for a HIT are returned. The ListAssignmentsForHIT operation can return submitted assignments awaiting approval, or it can return assignments that have already been approved or rejected. You can set AssignmentStatus=Approved,Rejected to get assignments that have already been approved and rejected together in one result set. </p> <p> Only the Requester who created the HIT can retrieve the assignments for that HIT. </p> <p> Results are sorted and divided into numbered pages and the operation returns a single page of results. You can use the parameters of the operation to control sorting and pagination. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceFault} <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
   *   - {RequestError} <p>Your request is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listAssignmentsForHIT(
    args: ListAssignmentsForHITInput
  ): Promise<ListAssignmentsForHITOutput>;
  public listAssignmentsForHIT(
    args: ListAssignmentsForHITInput,
    cb: (err: any, data?: ListAssignmentsForHITOutput) => void
  ): void;
  public listAssignmentsForHIT(
    args: ListAssignmentsForHITInput,
    cb?: (err: any, data?: ListAssignmentsForHITOutput) => void
  ): Promise<ListAssignmentsForHITOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListAssignmentsForHITCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> The <code>ListBonusPayments</code> operation retrieves the amounts of bonuses you have paid to Workers for a given HIT or assignment. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceFault} <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
   *   - {RequestError} <p>Your request is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listBonusPayments(
    args: ListBonusPaymentsInput
  ): Promise<ListBonusPaymentsOutput>;
  public listBonusPayments(
    args: ListBonusPaymentsInput,
    cb: (err: any, data?: ListBonusPaymentsOutput) => void
  ): void;
  public listBonusPayments(
    args: ListBonusPaymentsInput,
    cb?: (err: any, data?: ListBonusPaymentsOutput) => void
  ): Promise<ListBonusPaymentsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListBonusPaymentsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> The <code>ListHITs</code> operation returns all of a Requester's HITs. The operation returns HITs of any status, except for HITs that have been deleted of with the DeleteHIT operation or that have been auto-deleted. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceFault} <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
   *   - {RequestError} <p>Your request is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listHITs(args: ListHITsInput): Promise<ListHITsOutput>;
  public listHITs(
    args: ListHITsInput,
    cb: (err: any, data?: ListHITsOutput) => void
  ): void;
  public listHITs(
    args: ListHITsInput,
    cb?: (err: any, data?: ListHITsOutput) => void
  ): Promise<ListHITsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListHITsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> The <code>ListHITsForQualificationType</code> operation returns the HITs that use the given Qualification type for a Qualification requirement. The operation returns HITs of any status, except for HITs that have been deleted with the <code>DeleteHIT</code> operation or that have been auto-deleted. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceFault} <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
   *   - {RequestError} <p>Your request is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listHITsForQualificationType(
    args: ListHITsForQualificationTypeInput
  ): Promise<ListHITsForQualificationTypeOutput>;
  public listHITsForQualificationType(
    args: ListHITsForQualificationTypeInput,
    cb: (err: any, data?: ListHITsForQualificationTypeOutput) => void
  ): void;
  public listHITsForQualificationType(
    args: ListHITsForQualificationTypeInput,
    cb?: (err: any, data?: ListHITsForQualificationTypeOutput) => void
  ): Promise<ListHITsForQualificationTypeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListHITsForQualificationTypeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> The <code>ListQualificationRequests</code> operation retrieves requests for Qualifications of a particular Qualification type. The owner of the Qualification type calls this operation to poll for pending requests, and accepts them using the AcceptQualification operation. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceFault} <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
   *   - {RequestError} <p>Your request is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listQualificationRequests(
    args: ListQualificationRequestsInput
  ): Promise<ListQualificationRequestsOutput>;
  public listQualificationRequests(
    args: ListQualificationRequestsInput,
    cb: (err: any, data?: ListQualificationRequestsOutput) => void
  ): void;
  public listQualificationRequests(
    args: ListQualificationRequestsInput,
    cb?: (err: any, data?: ListQualificationRequestsOutput) => void
  ): Promise<ListQualificationRequestsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListQualificationRequestsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> The <code>ListQualificationTypes</code> operation returns a list of Qualification types, filtered by an optional search term. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceFault} <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
   *   - {RequestError} <p>Your request is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listQualificationTypes(
    args: ListQualificationTypesInput
  ): Promise<ListQualificationTypesOutput>;
  public listQualificationTypes(
    args: ListQualificationTypesInput,
    cb: (err: any, data?: ListQualificationTypesOutput) => void
  ): void;
  public listQualificationTypes(
    args: ListQualificationTypesInput,
    cb?: (err: any, data?: ListQualificationTypesOutput) => void
  ): Promise<ListQualificationTypesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListQualificationTypesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> The <code>ListReviewPolicyResultsForHIT</code> operation retrieves the computed results and the actions taken in the course of executing your Review Policies for a given HIT. For information about how to specify Review Policies when you call CreateHIT, see Review Policies. The ListReviewPolicyResultsForHIT operation can return results for both Assignment-level and HIT-level review results. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceFault} <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
   *   - {RequestError} <p>Your request is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listReviewPolicyResultsForHIT(
    args: ListReviewPolicyResultsForHITInput
  ): Promise<ListReviewPolicyResultsForHITOutput>;
  public listReviewPolicyResultsForHIT(
    args: ListReviewPolicyResultsForHITInput,
    cb: (err: any, data?: ListReviewPolicyResultsForHITOutput) => void
  ): void;
  public listReviewPolicyResultsForHIT(
    args: ListReviewPolicyResultsForHITInput,
    cb?: (err: any, data?: ListReviewPolicyResultsForHITOutput) => void
  ): Promise<ListReviewPolicyResultsForHITOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListReviewPolicyResultsForHITCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> The <code>ListReviewableHITs</code> operation retrieves the HITs with Status equal to Reviewable or Status equal to Reviewing that belong to the Requester calling the operation. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceFault} <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
   *   - {RequestError} <p>Your request is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listReviewableHITs(
    args: ListReviewableHITsInput
  ): Promise<ListReviewableHITsOutput>;
  public listReviewableHITs(
    args: ListReviewableHITsInput,
    cb: (err: any, data?: ListReviewableHITsOutput) => void
  ): void;
  public listReviewableHITs(
    args: ListReviewableHITsInput,
    cb?: (err: any, data?: ListReviewableHITsOutput) => void
  ): Promise<ListReviewableHITsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListReviewableHITsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>The <code>ListWorkersBlocks</code> operation retrieves a list of Workers who are blocked from working on your HITs.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceFault} <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
   *   - {RequestError} <p>Your request is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listWorkerBlocks(
    args: ListWorkerBlocksInput
  ): Promise<ListWorkerBlocksOutput>;
  public listWorkerBlocks(
    args: ListWorkerBlocksInput,
    cb: (err: any, data?: ListWorkerBlocksOutput) => void
  ): void;
  public listWorkerBlocks(
    args: ListWorkerBlocksInput,
    cb?: (err: any, data?: ListWorkerBlocksOutput) => void
  ): Promise<ListWorkerBlocksOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListWorkerBlocksCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> The <code>ListWorkersWithQualificationType</code> operation returns all of the Workers that have been associated with a given Qualification type. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceFault} <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
   *   - {RequestError} <p>Your request is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listWorkersWithQualificationType(
    args: ListWorkersWithQualificationTypeInput
  ): Promise<ListWorkersWithQualificationTypeOutput>;
  public listWorkersWithQualificationType(
    args: ListWorkersWithQualificationTypeInput,
    cb: (err: any, data?: ListWorkersWithQualificationTypeOutput) => void
  ): void;
  public listWorkersWithQualificationType(
    args: ListWorkersWithQualificationTypeInput,
    cb?: (err: any, data?: ListWorkersWithQualificationTypeOutput) => void
  ): Promise<ListWorkersWithQualificationTypeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListWorkersWithQualificationTypeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> The <code>NotifyWorkers</code> operation sends an email to one or more Workers that you specify with the Worker ID. You can specify up to 100 Worker IDs to send the same message with a single call to the NotifyWorkers operation. The NotifyWorkers operation will send a notification email to a Worker only if you have previously approved or rejected work from the Worker. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceFault} <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
   *   - {RequestError} <p>Your request is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public notifyWorkers(args: NotifyWorkersInput): Promise<NotifyWorkersOutput>;
  public notifyWorkers(
    args: NotifyWorkersInput,
    cb: (err: any, data?: NotifyWorkersOutput) => void
  ): void;
  public notifyWorkers(
    args: NotifyWorkersInput,
    cb?: (err: any, data?: NotifyWorkersOutput) => void
  ): Promise<NotifyWorkersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new NotifyWorkersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> The <code>RejectAssignment</code> operation rejects the results of a completed assignment. </p> <p> You can include an optional feedback message with the rejection, which the Worker can see in the Status section of the web site. When you include a feedback message with the rejection, it helps the Worker understand why the assignment was rejected, and can improve the quality of the results the Worker submits in the future. </p> <p> Only the Requester who created the HIT can reject an assignment for the HIT. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceFault} <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
   *   - {RequestError} <p>Your request is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public rejectAssignment(
    args: RejectAssignmentInput
  ): Promise<RejectAssignmentOutput>;
  public rejectAssignment(
    args: RejectAssignmentInput,
    cb: (err: any, data?: RejectAssignmentOutput) => void
  ): void;
  public rejectAssignment(
    args: RejectAssignmentInput,
    cb?: (err: any, data?: RejectAssignmentOutput) => void
  ): Promise<RejectAssignmentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RejectAssignmentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> The <code>RejectQualificationRequest</code> operation rejects a user's request for a Qualification. </p> <p> You can provide a text message explaining why the request was rejected. The Worker who made the request can see this message.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceFault} <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
   *   - {RequestError} <p>Your request is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public rejectQualificationRequest(
    args: RejectQualificationRequestInput
  ): Promise<RejectQualificationRequestOutput>;
  public rejectQualificationRequest(
    args: RejectQualificationRequestInput,
    cb: (err: any, data?: RejectQualificationRequestOutput) => void
  ): void;
  public rejectQualificationRequest(
    args: RejectQualificationRequestInput,
    cb?: (err: any, data?: RejectQualificationRequestOutput) => void
  ): Promise<RejectQualificationRequestOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RejectQualificationRequestCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> The <code>SendBonus</code> operation issues a payment of money from your account to a Worker. This payment happens separately from the reward you pay to the Worker when you approve the Worker's assignment. The SendBonus operation requires the Worker's ID and the assignment ID as parameters to initiate payment of the bonus. You must include a message that explains the reason for the bonus payment, as the Worker may not be expecting the payment. Amazon Mechanical Turk collects a fee for bonus payments, similar to the HIT listing fee. This operation fails if your account does not have enough funds to pay for both the bonus and the fees. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceFault} <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
   *   - {RequestError} <p>Your request is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public sendBonus(args: SendBonusInput): Promise<SendBonusOutput>;
  public sendBonus(
    args: SendBonusInput,
    cb: (err: any, data?: SendBonusOutput) => void
  ): void;
  public sendBonus(
    args: SendBonusInput,
    cb?: (err: any, data?: SendBonusOutput) => void
  ): Promise<SendBonusOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SendBonusCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> The <code>SendTestEventNotification</code> operation causes Amazon Mechanical Turk to send a notification message as if a HIT event occurred, according to the provided notification specification. This allows you to test notifications without setting up notifications for a real HIT type and trying to trigger them using the website. When you call this operation, the service attempts to send the test notification immediately. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceFault} <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
   *   - {RequestError} <p>Your request is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public sendTestEventNotification(
    args: SendTestEventNotificationInput
  ): Promise<SendTestEventNotificationOutput>;
  public sendTestEventNotification(
    args: SendTestEventNotificationInput,
    cb: (err: any, data?: SendTestEventNotificationOutput) => void
  ): void;
  public sendTestEventNotification(
    args: SendTestEventNotificationInput,
    cb?: (err: any, data?: SendTestEventNotificationOutput) => void
  ): Promise<SendTestEventNotificationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SendTestEventNotificationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> The <code>UpdateExpirationForHIT</code> operation allows you update the expiration time of a HIT. If you update it to a time in the past, the HIT will be immediately expired. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceFault} <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
   *   - {RequestError} <p>Your request is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateExpirationForHIT(
    args: UpdateExpirationForHITInput
  ): Promise<UpdateExpirationForHITOutput>;
  public updateExpirationForHIT(
    args: UpdateExpirationForHITInput,
    cb: (err: any, data?: UpdateExpirationForHITOutput) => void
  ): void;
  public updateExpirationForHIT(
    args: UpdateExpirationForHITInput,
    cb?: (err: any, data?: UpdateExpirationForHITOutput) => void
  ): Promise<UpdateExpirationForHITOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateExpirationForHITCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> The <code>UpdateHITReviewStatus</code> operation updates the status of a HIT. If the status is Reviewable, this operation can update the status to Reviewing, or it can revert a Reviewing HIT back to the Reviewable status. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceFault} <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
   *   - {RequestError} <p>Your request is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateHITReviewStatus(
    args: UpdateHITReviewStatusInput
  ): Promise<UpdateHITReviewStatusOutput>;
  public updateHITReviewStatus(
    args: UpdateHITReviewStatusInput,
    cb: (err: any, data?: UpdateHITReviewStatusOutput) => void
  ): void;
  public updateHITReviewStatus(
    args: UpdateHITReviewStatusInput,
    cb?: (err: any, data?: UpdateHITReviewStatusOutput) => void
  ): Promise<UpdateHITReviewStatusOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateHITReviewStatusCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> The <code>UpdateHITTypeOfHIT</code> operation allows you to change the HITType properties of a HIT. This operation disassociates the HIT from its old HITType properties and associates it with the new HITType properties. The HIT takes on the properties of the new HITType in place of the old ones. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceFault} <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
   *   - {RequestError} <p>Your request is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateHITTypeOfHIT(
    args: UpdateHITTypeOfHITInput
  ): Promise<UpdateHITTypeOfHITOutput>;
  public updateHITTypeOfHIT(
    args: UpdateHITTypeOfHITInput,
    cb: (err: any, data?: UpdateHITTypeOfHITOutput) => void
  ): void;
  public updateHITTypeOfHIT(
    args: UpdateHITTypeOfHITInput,
    cb?: (err: any, data?: UpdateHITTypeOfHITOutput) => void
  ): Promise<UpdateHITTypeOfHITOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateHITTypeOfHITCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> The <code>UpdateNotificationSettings</code> operation creates, updates, disables or re-enables notifications for a HIT type. If you call the UpdateNotificationSettings operation for a HIT type that already has a notification specification, the operation replaces the old specification with a new one. You can call the UpdateNotificationSettings operation to enable or disable notifications for the HIT type, without having to modify the notification specification itself by providing updates to the Active status without specifying a new notification specification. To change the Active status of a HIT type's notifications, the HIT type must already have a notification specification, or one must be provided in the same call to <code>UpdateNotificationSettings</code>. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceFault} <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
   *   - {RequestError} <p>Your request is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateNotificationSettings(
    args: UpdateNotificationSettingsInput
  ): Promise<UpdateNotificationSettingsOutput>;
  public updateNotificationSettings(
    args: UpdateNotificationSettingsInput,
    cb: (err: any, data?: UpdateNotificationSettingsOutput) => void
  ): void;
  public updateNotificationSettings(
    args: UpdateNotificationSettingsInput,
    cb?: (err: any, data?: UpdateNotificationSettingsOutput) => void
  ): Promise<UpdateNotificationSettingsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateNotificationSettingsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p> The <code>UpdateQualificationType</code> operation modifies the attributes of an existing Qualification type, which is represented by a QualificationType data structure. Only the owner of a Qualification type can modify its attributes. </p> <p> Most attributes of a Qualification type can be changed after the type has been created. However, the Name and Keywords fields cannot be modified. The RetryDelayInSeconds parameter can be modified or added to change the delay or to enable retries, but RetryDelayInSeconds cannot be used to disable retries. </p> <p> You can use this operation to update the test for a Qualification type. The test is updated based on the values specified for the Test, TestDurationInSeconds and AnswerKey parameters. All three parameters specify the updated test. If you are updating the test for a type, you must specify the Test and TestDurationInSeconds parameters. The AnswerKey parameter is optional; omitting it specifies that the updated test does not have an answer key. </p> <p> If you omit the Test parameter, the test for the Qualification type is unchanged. There is no way to remove a test from a Qualification type that has one. If the type already has a test, you cannot update it to be AutoGranted. If the Qualification type does not have a test and one is provided by an update, the type will henceforth have a test. </p> <p> If you want to update the test duration or answer key for an existing test without changing the questions, you must specify a Test parameter with the original questions, along with the updated values. </p> <p> If you provide an updated Test but no AnswerKey, the new test will not have an answer key. Requests for such Qualifications must be granted manually. </p> <p> You can also update the AutoGranted and AutoGrantedValue attributes of the Qualification type.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceFault} <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
   *   - {RequestError} <p>Your request is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateQualificationType(
    args: UpdateQualificationTypeInput
  ): Promise<UpdateQualificationTypeOutput>;
  public updateQualificationType(
    args: UpdateQualificationTypeInput,
    cb: (err: any, data?: UpdateQualificationTypeOutput) => void
  ): void;
  public updateQualificationType(
    args: UpdateQualificationTypeInput,
    cb?: (err: any, data?: UpdateQualificationTypeOutput) => void
  ): Promise<UpdateQualificationTypeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateQualificationTypeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
